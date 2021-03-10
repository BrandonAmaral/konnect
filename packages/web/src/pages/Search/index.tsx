import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { Container, Content, Users, Posts } from './styles';
import Navbar from '../../components/Navbar';
import useRequest from '../../hooks/useRequest';

interface SearchParam {
  param: string;
}

interface PostData {
  _id: string;
  likes: [];
  owner?: {
    _id?: string;
    username?: string;
    tag?: string;
    profilePicture?: string;
  };
  content?: string;
  slug?: string;
}

interface UserData {
  _id?: string;
  username?: string;
  tag?: string;
  profilePicture?: string;
  following?: [];
  followers?: [user_data: { _id: string }];
}

type PostState = PostData[];
type UserState = UserData[];

const Search: React.FC = () => {
  const { param } = useParams<SearchParam>();

  const [users, setUsers] = useState<UserState>();
  const [posts, setPosts] = useState<PostState>();

  const searchUser = useRequest({
    url: `/api/users/search`,
    method: 'get',
  });
  const searchPost = useRequest({
    url: `/api/posts/search`,
    method: 'get',
  });

  useEffect(() => {
    searchUser.makeRequest({}, `/${param}`).then((data) => setUsers(data));
    searchPost.makeRequest({}, `/${param}`).then((data) => setPosts(data));
  }, [param]);

  return (
    <Container>
      <Navbar />
      <Content>
        <h1>Users</h1>
        {users?.length === 0 && <div>No users found</div>}
        {users?.map((user) => (
          <Users key={user._id}>
            <Link className="user" to={`/${user.tag}`}>
              <div className="image">
                <img
                  src={`${process.env.REACT_APP_URL}/files/${user.profilePicture}`}
                  alt="pp"
                />
              </div>
              <div className="user-info">
                <span className="username">{user.username}</span>
                <span className="tag">{`@${user.tag}`}</span>
              </div>
            </Link>
          </Users>
        ))}
        <h1>Posts</h1>
        {posts?.length === 0 && <div>No posts found</div>}
        {posts?.map((post) => (
          <Posts key={post._id}>
            <Link className="post" to={`/${post.owner?.tag}/${post.slug}`}>
              <Link className="user" to={`/${post.owner?.tag}`}>
                <div className="image">
                  <img
                    src={`${process.env.REACT_APP_URL}/files/${post.owner?.profilePicture}`}
                    alt="pp"
                  />
                </div>
                <div className="user-info">
                  <span className="username">{post.owner?.username}</span>
                  <span className="tag">{`@${post.owner?.tag}`}</span>
                </div>
              </Link>
              <p className="content">{post.content}</p>
              <div className="content">{`Likes: ${post.likes.length}`}</div>
            </Link>
          </Posts>
        ))}
      </Content>
    </Container>
  );
};

export default Search;
