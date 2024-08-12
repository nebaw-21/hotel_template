import { Routes, Route } from "react-router-dom";
import HomePage from "./components/home";
import Gallery from "./components/gallery";
import ContactUs from "./components/contactUs";
import Room  from "./components/room";
function App() {
  return (
<Routes>
  < Route path="/" element={<HomePage />} />
  < Route path="/gallery" element={<Gallery />}  />
  < Route path="/contact" element={<ContactUs />} />
  < Route path="/room" element={<Room />} />
</Routes>


  );
}

export default App;
