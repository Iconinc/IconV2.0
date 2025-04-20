"use client";
import React from "react";
import Container from "../shared/Container";
import Button from "../ui/Button";

const Navbar = () => {
  return (
    <div className="w-screen fixed top-0 flex justify-center items-center">
      <Container className="py-2 lg:py-4 w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 lg:gap-12">
            <h1 className=" font-black text-3xl flex items-start text-blue-600 pl-2">
              ICON
              <span className="text-xs -ml-1 border p-2 scale-50">TM</span>
            </h1>
            <div className="font-medium hidden lg:flex items-center text-slate-700">
              <Button path="">Home</Button>
              <Button path="project">Projects</Button>
              <Button path="services">Services</Button>
            </div>
          </div>
          <div className="font-medium hidden lg:flex items-center text-slate-700">
            <Button path="about">About</Button>
            <Button
              path="contact"
              className="!border-blue-600 bg-blue-600 hover:!bg-blue-700  text-white !rounded-full"
            >
              Contact
            </Button>
          </div>
          <div className="font-medium flex lg:hidden items-center text-slate-700">
            <Button
              click={() => console.log("Clicked")}
              className="!border-blue-600 bg-blue-600 hover:!bg-blue-700 text-white !rounded-full"
            >
              Menu
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
