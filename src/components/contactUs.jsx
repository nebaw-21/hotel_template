
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import NavBar from "./navBar";
import Footer from "./footer";
export default function ContactUs() {
  return (
<>
<NavBar />

    <section className="px-8 py-8 lg:py-16">
      <div className="container mx-auto text-center">
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-6 !text-base lg:!text-3xl roboto-bold"
        >
          Customer Care
        </Typography>


        <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
       
        <div className="relative pb-[56.25%] md:pb-[45%] lg:pb-[40%] overflow-hidden lg:h-[420px]">
  <iframe
    className="absolute top-0 left-0 w-full h-full sm:h-[400px] md:h-[600px] lg:h-[800px]"
    src="https://maps.google.com/maps?width=620&amp;height=400&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
    <a href="https://www.gps.ie/">gps systems</a>
  </iframe>
</div>
          <form
            action="#"
            className="flex flex-col gap-4 lg:max-w-sm"
          >    
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  First Name
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="First Name"
                  name="first-name"
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  Last Name
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="Last Name"
                  name="last-name"
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900"
              >
                Your Email
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="name@email.com"
                name="email"
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900"
              >
                Your Message
              </Typography>
              <Textarea
                rows={6}
                color="gray"
                placeholder="Message"
                name="message"
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <Button className="w-full" color="gray">
              Send message
            </Button>
          </form>
        </div>
      </div>
    </section>

<Footer />
</>

  );
}

