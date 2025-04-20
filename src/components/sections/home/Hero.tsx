import Container from "@/components/shared/Container";
import HeroIntroVideo from "@/components/shared/HeroIntroVideo";
import HeroShowcase from "@/components/shared/HeroShowcase";
import Button from "@/components/ui/Button";
import React from "react";
import { GoArrowRight } from "react-icons/go";

const Hero = () => {
  return (
    <div className="w-screen min-h-screen pb-12 flex flex-col justify-start items-center bg-radial-[at_15%_25%] from-blue-50 via-blue-200 to-white to-90%">
      <Container className="pt-24 lg:pt-32 flex flex-col gap-6 justify-start items-start">
        <div className="w-full flex flex-col gap-6 md:flex-row justify-start items-start">
          <div className="w-full md:w-[40%] flex flex-col justify-start items-start gap-4 text-slate-700">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light md:font-semibold tracking-tight">
              Design. <br />
              <span>Prototype.</span> <br />
              Colaborate. <br />
            </h1>
            <p className="text-lg md:w-[60%] text-slate-600">
              Create beautiful designs for websites, apps, and more, directly in
              your browser.
            </p>
            <Button className="!bg-blue-600 !text-white !rounded-full gap-4 flex items-center hover:gap-6">
              Start for Free
              <GoArrowRight />
            </Button>
          </div>
          <div className="w-full md:w-[60%] h-full">
            <HeroShowcase />
          </div>
        </div>
        <HeroIntroVideo />
      </Container>
    </div>
  );
};

export default Hero;
