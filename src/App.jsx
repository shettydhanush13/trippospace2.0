import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./pages/home"
import BlogPost from "./pages/blogpost";

const App = () => {
  const post = {
    "title": "Exploring the Enchanting Temples of Southeast Asia",
    "content": "Southeast Asia is a region rich in culture, history, and spirituality. One of the most captivating aspects of this diverse region is its magnificent temples, which serve as a testament to the region's ancient civilizations and religious traditions. From the majestic Angkor Wat in Cambodia to the serene Borobudur in Indonesia, exploring these sacred sites is a journey through time and spirituality.\n\nOne of the highlights of any trip to Southeast Asia is a visit to Angkor Wat in Siem Reap, Cambodia. Built in the 12th century, this sprawling temple complex is the largest religious monument in the world and a UNESCO World Heritage Site. As you wander through its intricately carved corridors and towering spires, you can't help but be awestruck by the sheer grandeur of this ancient wonder.\n\nAnother must-visit temple in Southeast Asia is Borobudur in Java, Indonesia. Dating back to the 9th century, this massive Buddhist temple is adorned with thousands of intricate carvings and statues, each telling a story of enlightenment and spiritual awakening. Climbing to the top of Borobudur at sunrise is a magical experience, as you watch the sun rise over the surrounding volcanoes and lush jungles.\n\nIn Thailand, the ancient city of Ayutthaya is home to a plethora of stunning temples, including the iconic Wat Chaiwatthanaram and Wat Mahathat. Exploring the ruins of Ayutthaya, a UNESCO World Heritage Site, offers a glimpse into Thailand's rich history and architectural heritage.\n\nAs you travel through Southeast Asia, you'll encounter countless other temples, each with its own unique charm and significance. Whether you're marveling at the golden spires of the Shwedagon Pagoda in Myanmar or exploring the ancient ruins of Bagan, temples are an integral part of the region's cultural landscape, inviting travelers to embark on a spiritual journey of discovery and enlightenment.",
    "imageUrl": "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg"
  }
 return (
   <div className="App">
     <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPost post={post}/>} />
       </Routes>
     </BrowserRouter>
   </div>
 )
}

export default App
