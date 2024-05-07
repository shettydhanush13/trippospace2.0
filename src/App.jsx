import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./pages/home"
import BlogPost from "./pages/blogpost";

const App = () => {
 return (
   <div className="App">
     <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogPost/>} />
       </Routes>
     </BrowserRouter>
   </div>
 )
}

export default App
