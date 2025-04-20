"use client";
import React, { useState, useEffect } from "react";
import { BiMessageSquare } from "react-icons/bi";
import { GoHome } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { RiAccountCircle2Line } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const icons = [
  { id: "home", icon: <GoHome size={18} /> },
  { id: "dashboard", icon: <MdOutlineSpaceDashboard size={18} /> },
  { id: "messages", icon: <BiMessageSquare size={18} /> },
  { id: "settings", icon: <IoSettingsOutline size={18} /> },
  { id: "account", icon: <RiAccountCircle2Line size={18} /> },
];

const HeroShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-update active icon every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % icons.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <div className="w-full flex justify-start items-start gap-4 scale-95">
      <div className="w-[3rem] md:w-[4rem] h-[320px] md:h-[424px] lg:h-[520px] flex flex-col items-center justify-between rounded-2xl md:rounded-4xl bg-white/20 border border-white/20 backdrop-blur-md p-2">
        <ul className="flex flex-col items-center gap-2">
          {icons.slice(0, -1).map((item, index) => (
            <motion.li
              key={item.id}
              onClick={() => handleClick(index)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`${
                activeIndex === index
                  ? "bg-blue-600 text-white"
                  : "text-slate-700"
              } rounded-4xl size-[2.5rem] md:size-[3rem] flex justify-center items-center cursor-pointer transition-all duration-300`}
            >
              {item.icon}
            </motion.li>
          ))}
        </ul>

        <motion.li
          onClick={() => handleClick(icons.length - 1)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`${
            activeIndex === icons.length - 1
              ? "bg-blue-600 text-white"
              : "text-slate-700"
          } rounded-4xl size-[2.5rem] md:size-[3rem] flex justify-center items-center cursor-pointer transition-all duration-300`}
        >
          {icons[icons.length - 1].icon}
        </motion.li>
      </div>
      <div className="w-full text-white rounded-2xl md:rounded-4xl h-[320px] md:h-[424px] lg:h-[520px] flex flex-col gap-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="w-full bg-blue-600 text-white rounded-2xl md:rounded-4xl h-[424px] lg:h-[520px] p-4 text-xl font-semibold flex items-start justify-start"
          >
            <p className="text-sm">
              {icons[activeIndex].id.charAt(0).toUpperCase() +
                icons[activeIndex].id.slice(1)}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroShowcase;
