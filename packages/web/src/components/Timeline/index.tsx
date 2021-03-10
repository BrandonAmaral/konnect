import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Post } from './styles';
import useRequest from '../../hooks/useRequest';
import { useAuth } from '../../hooks/useAuth';
import Like from '../LikeButton';
import Dislike from '../DislikeButton';

interface PostData {
  _id: string;
  likes: [user_data: { _id: string }];
  owner?: {
    _id?: string;
    username?: string;
    tag?: string;
    profilePicture?: string;
  };
  content?: string;
  slug?: string;
}

type TimelineData = PostData[];

const Timeline: React.FC = () => {
  const { user } = useAuth();

  const [content, setContent] = useState<TimelineData>([]);
  const [change, setChange] = useState(true);

  const { makeRequest } = useRequest({
    url: '/api/posts/timeline',
    method: 'get',
  });

  useEffect(() => {
    if (change) {
      makeRequest().then((response) => {
        setContent(response);
        setChange(false);
      });
    }
  }, [makeRequest]);

  return (
    <Container>
      <Content>
        {content[0] &&
          content.map((post) => (
            <Post key={post._id}>
              <div className="user">
                <Link to={`/${post.owner?.tag}`}>
                  <img
                    src={`${process.env.REACT_APP_URL}/files/${post.owner?.profilePicture}`}
                    alt="pp"
                  />
                </Link>
                <Link className="user-info" to={`/${post.owner?.tag}`}>
                  <span className="username">{post.owner?.username}</span>
                  <span className="tag">{`@${post.owner?.tag}`}</span>
                </Link>
              </div>
              <Link className="post" to={`/${post.owner?.tag}/${post.slug}`}>
                <span className="content">{post.content}</span>
                <span className="content">{`Likes: ${post.likes.length}`}</span>
              </Link>
              <div className="like-div">
                {!post.likes.length && (
                  <Like
                    className="button"
                    key={post._id}
                    change={() => setChange(true)}
                    postid={post._id}
                  >
                    Like
                  </Like>
                )}
                {post.likes.map((data) =>
                  !(user._id === data._id) ? (
                    <Like
                      className="button"
                      key={post._id}
                      change={() => setChange(true)}
                      postid={post?._id}
                    >
                      Like
                    </Like>
                  ) : (
                    <Dislike
                      className="button"
                      key={post._id}
                      change={() => setChange(true)}
                      postid={post?._id}
                    >
                      Dislike
                    </Dislike>
                  ),
                )}
              </div>
            </Post>
          ))}
      </Content>
    </Container>
  );
};

export default Timeline;
