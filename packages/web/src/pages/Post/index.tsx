import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { Container, Content, PostInfo } from './styles';
import Navbar from '../../components/Navbar/index';
import Like from '../../components/LikeButton';
import Dislike from '../../components/DislikeButton';
import useRequest from '../../hooks/useRequest';
import { useAuth } from '../../hooks/useAuth';

interface PostParams {
  user: string;
  post: string;
}

interface PostData {
  user?: {
    _id: string;
    username: string;
    tag: string;
    profilePicture: string;
  };
  post?: {
    _id: string;
    slug: string;
    content: string;
    likes: [user_data: { _id: string }];
  };
}

const Post: React.FC = () => {
  const { user: userId, post: postId } = useParams<PostParams>();
  const { user } = useAuth();

  const [info, setInfo] = useState<PostData>({});
  const [change, setChange] = useState(true);

  const { makeRequest } = useRequest({
    method: 'get',
    url: `/api/posts/info/${userId}/${postId}`,
  });

  useEffect(() => {
    if (change) {
      makeRequest().then((data) => {
        setInfo(data);
        setChange(false);
      });
    }
  }, [makeRequest]);

  return (
    <Container>
      <Navbar />
      <Content>
        {info.post && (
          <PostInfo key={info.post.likes.length}>
            <Link to={`/${info.user?.tag}`}>
              <div className="user">
                <div className="image">
                  <img
                    src={`${process.env.REACT_APP_URL}/files/${info.user?.profilePicture}`}
                    alt="pp"
                  />
                </div>
                <div className="user-info">
                  <span className="username">{`${info.user?.username}`}</span>
                  <span className="tag">{`@${info.user?.tag}`}</span>
                </div>
              </div>
            </Link>
            <div className="content">
              <span>{`${info.post?.content}`}</span>
              <span className="likes">{`Likes: ${info.post?.likes.length}`}</span>
            </div>
            <div className="like-button-div">
              {!info.post.likes.length && (
                <Like
                  className="button"
                  key={info.post?._id}
                  change={() => setChange(true)}
                  postid={info.post._id}
                >
                  Like
                </Like>
              )}
              {info.post.likes.map((data) =>
                !(user._id === data._id) ? (
                  <Like
                    className="button"
                    key={info.post?._id}
                    change={() => setChange(true)}
                    postid={info.post?._id}
                  >
                    Like
                  </Like>
                ) : (
                  <Dislike
                    className="button"
                    key={info.post?._id}
                    change={() => setChange(true)}
                    postid={info.post?._id}
                  >
                    Dislike
                  </Dislike>
                ),
              )}
            </div>
          </PostInfo>
        )}
      </Content>
    </Container>
  );
};

export default Post;
