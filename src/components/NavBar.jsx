import { CodeXml } from "lucide-react";
import HeroSection from "./HeroSection";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      {/* <div className="min-h-screen w-full bg-white relative px-3 md:px-7 py-3">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "#ffffff",
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.35) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative z-10">
          <div className=" flex items-center justify-between  ">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="bg-[#f48400] text-white flex aspect-square size-8 items-center justify-center rounded-lg">
                <CodeXml className="size-4 font-bold" />
              </div>
              <h1 className="font-bold text-lg md:text-2xl font-grotesk">
                Code Matee
              </h1>
            </div>

            <button className="bg-[#4255f4] px-3 py-1 md:px-4 md:py-2 rounded-lg text-white font-grotesk cursor-pointer">
              Sign in
            </button>
          </div>
          <div className="flex justify-center  w-full py-30 sm:h-[500px]">
            <HeroSection />
          </div>
        </div>
      </div> */}

      <div className=" flex items-center justify-between  ">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-[#f48400] text-white flex aspect-square size-8 items-center justify-center rounded-lg">
            <CodeXml className="size-4 font-bold" />
          </div>
          <h1 className="font-bold text-lg md:text-2xl font-grotesk">
            Code Matee
          </h1>
        </div>

        <Link to="/login">
          <button className="bg-[#4255f4] px-3 py-1 md:px-4 md:py-2 rounded-lg text-white font-grotesk cursor-pointer">
            Sign in
          </button>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
