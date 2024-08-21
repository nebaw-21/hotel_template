import NavBar from "./navBar";
import Footer from "./footer";
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import { motion, AnimatePresence } from "framer-motion"
import img1 from "../assets/singlebedroom.jpg"
import img2 from "../assets/doublebedroom.jpg"
import img3 from "../assets/kingbedroom.jpg"
import img4 from "../assets/queenbedroom.jpg"
import { Link } from "react-router-dom";
const roomData = [
  {
    image: img1,
    title: "Single Bed Room",
    description: "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows."
  },
  {
    image: img2,
    title: "Double Bed Room",
    description: "Relax in our spacious double bed room, featuring modern amenities and stunning views of the countryside ancient trees, stone walls,."
  },
  {
    image:img3,
    title: "Family Suite",
    description: "Our family suite offers ample space and comfort for you and your loved ones, with a separate living area and kitchenette."
  },
  {
    image: img4,
    title: "Penthouse Suite",
    description: "Experience the height of luxury in our stunning penthouse suite, featuring a private terrace, modern amenities, and breathtaking views of the city skyline."
  }
];

export default function Room() {
  return (
    <>
      <NavBar />
      <h1 className="text-3xl text-center roboto-bold "> Hotel Rooms</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center ">
        {roomData.map((room, index) => (
          <AnimatePresence key={index}>
            <motion.Card
              className="w-full max-w-sm shadow-2xl"
              whileHover={{
                scale: 1.0175,
              }}
              initial={{ y: 0 }}
              animate={{ y: 20 }}
              transition={{ delay: index * 0.25, type: "spring", stiffness: 100 }}
              exit={{ y: 0 }}
            >
              <CardHeader floated={false} color="blue-gray">
                <img src={room.image} alt={room.title} />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
              </CardHeader>
              <CardBody>
                <div className="mb-3 flex items-center justify-between">
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="font-medium roboto-bold mx-auto hover:underline transition-all duration-300 ease-in-out"
                  >
                    <Link to={"/specificroom"}>
                    {room.title}
                    </Link>
                  </Typography>
                </div>
                <Typography className="roboto-medium" color="gray">
                  {room.description}
                </Typography>
              </CardBody>
              <CardFooter className="pt-1 roboto-bold">
                <Button size="lg" fullWidth={true}>
                  View Room Details
                </Button>
              </CardFooter>
            </motion.Card>
          </AnimatePresence>
        ))}
      </div>
      <Footer />
    </>
  );
}