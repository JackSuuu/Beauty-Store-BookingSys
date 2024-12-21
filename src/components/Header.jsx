import { arrow_icon, header_img } from "../constants";
import Button from "./Button";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      {/* Left section */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="max-w-lg text-2xl md:text-3xl lg:text-4xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appontment with The Most Professional Beauty Care
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm fon-light">
          <p className="max-w-md">
            Simply browse through our extensive list of services,
            schedule your appointment hassle-free.
          </p>
        </div>
        <Button
          label="Book appointment"
          href="#speciality"
          iconURL={arrow_icon}
          backgroundColor="bg-white"
          textColor="text-gray-600"
          borderColor="border-primary"
        />
      </div>

      {/* Right section */}
      <div className="md:w-1/2 relative">
        <img
          src={header_img}
          alt="hero-img"
          className="w-full md:absolute bottom-20 right-5 h-auto rounded-lg md:scale-150"
          width={1500}
          height={1500}
        />
      </div>
    </header>
  );
};

export default Header;
