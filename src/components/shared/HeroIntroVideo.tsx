"use client";
import React from "react";
import ReactPlayer from "react-player";

const HeroIntroVideo = () => {
  return (
    <div className="w-full md:px-4 py-10 flex items-center justify-center">
      <div className="w-full aspect-video rounded-xl lg:rounded-4xl overflow-hidden shadow-2xl border-4 border-blue-600">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=D6446Z5z7p8"
          width="100%"
          height="100%"
          controls
          style={{ backgroundColor: "#e0f2fe" }}
          autoPlay
        />
      </div>
    </div>
  );
};

export default HeroIntroVideo;
