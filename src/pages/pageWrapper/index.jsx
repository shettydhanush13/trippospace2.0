import './styles.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';

const PageWrapper = ({ children }) => {
  return (
    <>
      <Header/>
        <div className="page-wrapper">
            {children}
        </div>
      <Footer/>
    </>
  );
}

export default PageWrapper;
