import './styles.scss';
import BlogSection from '../../components/blogs'
import LandingPage from '../../components/landing'
import PageWrapper from '../pageWrapper';

const Home = () => {
  return (
    <PageWrapper>
        <LandingPage/>
        <BlogSection/>
    </PageWrapper>
  );
}

export default Home;
