import React from "react";

const Screen = () => {
  return (
    <div className="bording fixed bottom-0 right-0 p-6">
      <div className="bg-blue-600 text-white px-6 py-4">
        <div className="block sm:hidden md:hidden lg:hidden xl:hidden">
          X-small
        </div>
        <div className="hidden sm:block md:hidden lg:hidden xl:hidden">
          Small
        </div>
        <div className="hidden sm:hidden md:block lg:hidden xl:hidden">
          Medium
        </div>
        <div className="hidden sm:hidden md:hidden lg:block xl:hidden">
          Large
        </div>
        <div className="hidden sm:hidden md:hidden lg:hidden xl:block">
          xlarge
        </div>
      </div>
    </div>
  );
};

export default Screen;
