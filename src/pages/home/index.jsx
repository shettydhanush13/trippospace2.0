import './styles.scss';
import BlogSection from '../../components/blogs'
import Header from '../../components/header';
import Footer from '../../components/footer';

const Home = () => {
  return (
    <>
      <Header/>
      <div className="body-wrapper">
        <BlogSection/>
      </div>
      <Footer/>
    </>
  );
}

export default Home;
