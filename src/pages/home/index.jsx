import './styles.scss';
import BlogSection from '../../components/blogs'
import Header from '../../components/header';
import Footer from '../../components/footer';
import LandingPage from '../../components/landing'

const Home = () => {
  return (
    <>
      <Header/>
      <div className="body-wrapper">
        <LandingPage/>
        <BlogSection/>
      </div>
      <Footer/>
    </>
  );
}

export default Home;
