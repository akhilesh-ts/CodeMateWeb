import { TextEffect } from "/components/motion-primitives/text-effect";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <TextEffect
          className="text-xl  md:text-4xl lg:text-6xl font-extrabold font-grotesk sm:tracking-widest"
          per="char"
          delay={0.5}
          variants={{
            container: {
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                },
              },
            },
            item: {
              hidden: {
                opacity: 0,
                rotateX: 90,
                y: 10,
              },
              visible: {
                opacity: 1,
                rotateX: 0,
                y: 0,
                transition: {
                  duration: 0.2,
                },
              },
            },
          }}
        >
          Connect with Developers.
        </TextEffect>
        <TextEffect
          className="text-lg  md:text-3xl lg:text-4xl text-[#f48400] py-3 md:py-5 font-grotesk font-semibold tracking-wider"
          per="char"
          delay={1.5}
        >
          Chat with Real-Time.
        </TextEffect>
        
      </div>
    </>
  );
};

export default HeroSection;





