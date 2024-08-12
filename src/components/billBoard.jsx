import { Carousel, Typography, IconButton } from "@material-tailwind/react";
import img1 from "../assets/pexels-westernhotel-4873365.jpg";
import img2 from "../assets/pexels-ahmet-cotur-776571149-24807130.jpg"
import img3 from "../assets/pexels-ryutaro-5746250.jpg"

// eslint-disable-next-line react/prop-types
export default function BillBoard({ children }) {
  const billBordData = [
    {
      image: img2,
      title: "Learn the meaning of Exclusive privacy",
    },
    {
      image: img1,
      title: "Local Restaurants & Beer brewery",
    },
    {
      image: img3,
      title: "Luxury private Pool",
    },
  ];

  return (
    <div className="relative h-[605px] lg:h-[615px]">
      <div className="absolute inset-0 z-10">{children}</div>
      <Carousel autoplay={true}  loop={true} transition={{duration:2}}
        prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )} className="h-full">
        {billBordData.map((data, index) => (
          <div key={index} className="relative h-full w-full">
            <img
              src={data.image}
              alt={`image ${index + 1}`}
              className="h-full w-full object-cover brightness-150  duration-1000 ease-in-out "
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  {data.title}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
