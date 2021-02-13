import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MainContainer from '../../components/MainContainer';
import { PostData } from '../../domain/posts/post';

type PostProps = {
  post: PostData;
};

const Post = ({ post }: PostProps) => (
  <>
    <Header />

    <MainContainer>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </MainContainer>

    <Footer />
  </>
);

export default Post;
