import './App.css';
import Home from './components/home'
import Navbar from './components/navbar'
import Footer from './components/footer'

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
