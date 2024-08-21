import Footer from "./footer";
import NavBar from "./navBar";
import img1 from "../assets/food3.jpg";
import img2 from "../assets/food4.jpg";
import img3 from "../assets/restaurant1.jpg";
import img4 from "../assets/restaurant3.jpg";
import img5 from "../assets/kingbedroom.jpg";
import img6 from "../assets/parking3.jpg";
import img7 from "../assets/doublebedroom.jpg";
import img8 from "../assets/food7.jpg";
import img9 from "../assets/pexels-lgh_9-324057-1256875.jpg";
import img10 from "../assets/burger.jpg";
import img11 from "../assets/meetinghall3.jpg";
import img12 from "../assets/pexels-westernhotel-4873365.jpg";

export default function Gallery() {
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        <div className="grid gap-4">
          <div className="h-60 md:h-80 lg:h-96">
            <img
              className="h-full w-full object-cover rounded-lg"
              src={img1}
              alt="Food Image 1"
            />
          </div>
          <div className="h-60 md:h-80 lg:h-96">
            <img
              className="h-full w-full object-cover rounded-lg"
              src={img2}
              alt="Food Image 2"
            />
          </div>
          <div className="h-60 md:h-80 lg:h-96">
            <img
              className="h-full w-full object-cover rounded-lg"
              src={img3}
              alt="Restaurant Image 1"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="h-60 md:h-80 lg:h-96">
            <img
              className="h-full w-full object-cover rounded-lg"
              src={img4}
              alt="Restaurant Image 2"
            />
          </div>
          <div className="h-60 md:h-80 lg:h-96">
            <img
              className="h-full w-full object-cover rounded-lg"
              src={img5}
              alt="King Bedroom"
            />
          </div>
          <div className="h-60 md:h-80 lg:h-96">
            <img
              className="h-full w-full object-cover rounded-lg"
              src={img6}
              alt="Parking Image"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="h-60 md:h-80 lg:h-96">
            <img
              className="h-full w-full object-cover rounded-lg"
              src={img7}
              alt="Double Bedroom"
            />
          </div>
          <div className="h-60 md:h-80 lg:h-96">
            <img
              className="h-full w-full object-cover rounded-lg"
              src={img8}
              alt="Food Image 3"
            />
          </div>
          <div className="h-60 md:h-80 lg:h-96">
            <img
              className="h-full w-full object-cover rounded-lg"
              src={img9}
              alt="Food Image 4"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="h-60 md:h-80 lg:h-96">
            <img
              className="h-full w-full object-cover rounded-lg"
              src={img10}
              alt="Burger Image"
            />
          </div>
          <div className="h-60 md:h-80 lg:h-96">
            <img
              className="h-full w-full object-cover rounded-lg"
              src={img11}
              alt="Meeting Hall"
            />
          </div>
          <div className="h-60 md:h-80 lg:h-96">
            <img
              className="h-full w-full object-cover rounded-lg"
              src={img12}
              alt="Hotel Exterior"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}