import NavBar from "./navBar";
import BillBoard from "./billBoard";
import Footer from "./footer";
import RoomCarousel from "./homeComponents/RoomsCarousel";
import FoodAndBeverage from "./homeComponents/FoodAndBeverage"
import FacilityForHome from "./homeComponents/FacilityForHome"
import Event from "./homeComponents/Events"
import Contact from "./homeComponents/Contact"
import Parking from "./homeComponents/parking";
export default function HomePage(){
    return (
        <>
          <BillBoard>
            <NavBar />
          </BillBoard>

        <RoomCarousel />
        <FoodAndBeverage />
        <FacilityForHome/>
        <Event />
        <Contact />
        <Parking />
       < Footer />

        </>
      );
    
}