import React from "react";
import bg from "../assets/school.jpg";
const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Better Learning Better Results
          </h1>
          <p className="mb-5">
            Consectur adipiscing elitsedo eiusmod tempor incididuntem utaborate
            dolore magna aliqua ad minim veniamque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
