import { Routes, Route } from "react-router-dom";
import  { Suspense, lazy } from "react";
import Loading from "./components/loading"; // Loading component to show during lazy loading

// Lazy load the components
const HomePage = lazy(() => import("./components/home"));
const Gallery = lazy(() => import("./components/gallery"));
const ContactUs = lazy(() => import("./components/contactUs"));
const Room = lazy(() => import("./components/room"));
const SpecificRoom = lazy(() => import("./components/SpecificRoom"));
const About = lazy(() => import("./components/aboutUs"));
const Menu = lazy(() => import("./components/menu"));
const Wellness = lazy(() => import("./components/wellness"));
const SpecificWellness = lazy(() => import("./components/specificWellness"));
const Facility = lazy(() => import("./components/facilities"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/room" element={<Room />} />
        <Route path="/specificRoom" element={<SpecificRoom />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route path="/specificWellness" element={<SpecificWellness />} />
        <Route path="/facility" element={<Facility />} />
      </Routes>
    </Suspense>
  );
}

export default App;
