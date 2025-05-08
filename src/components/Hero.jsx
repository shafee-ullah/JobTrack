import React from "react";
import BannerImg from "../assets/BannerImg.jpg";

const Hero = () => {
  return (
    <div>
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 sm:pt-4 lg:pt-14 ">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        ></div>
        <div className="mx-auto max-w-7xl px-8 py-14 lg:py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto">
              Find the career of your dreams with our job portal
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                Our job portal connects talented professionals with top
                employers across industries. We offer a seamless experience for
                job seekers to explore opportunities and apply with ease.Join thousands of users already advancing their careers with our
                trusted platform.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="btn 
              
              rounded-3xl 
            bg-green-600
              text-white
              hover:bg-[rgba(11,130,5,1)]
              border-none"
                >
                  Get started
                </a>
              </div>
            </div>
            <img
              src={BannerImg}
              alt=""
              className="mt-10 aspect-6/5 w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"></div>
      </div>
    </div>
  );
};

export default Hero;
