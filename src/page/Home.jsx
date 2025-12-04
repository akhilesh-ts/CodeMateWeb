import { Footer } from "../components/Footer";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div className="h-screen w-full bg-[#ffffff] relative px-3 md:px-7 py-3">
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
        <NavBar />
        <div className="flex justify-center  w-full h-[490px] md:h-[80vh] ">
          <HeroSection />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
