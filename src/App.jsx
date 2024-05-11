import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./pages/home"
import BlogPost from "./pages/blogpost";
import AboutUs from "./pages/about"
import ContactUs from "./pages/contact"

const App = () => {
 return (
   <div className="App">
     <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogPost/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/contact" element={<ContactUs/>} />
       </Routes>
     </BrowserRouter>
   </div>
 )
}

export default App
