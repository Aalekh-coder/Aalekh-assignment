import React from "react";
import Bg from "../components/miniComponents/bg";
import Header from "../components/Header";

const page = () => {
  return (
    <Bg>
      <div className="">
        <Header />
        <div className="">
          <div className="">
            <img
              src="/assets/scoreBarMain.png"
              className="h-[18rem] absolute top-[10rem] left-1 sm:h-[22rem] md:h-[20rem] lg:absolute lg:top-[8rem] lg:h-[23rem] lg:pl-5 xl:h-[42rem] 2xl:h-[35rem] cd:h-[28rem]"
            />
          </div>

          <div className="">
            <img
              src="/assets/Group165.png"
              className="h-[15rem] absolute left-[5rem] top-[11rem] sm:h-[20rem] sm:left-[7rem] md:h-[20rem] lg:h-[23rem] lg:absolute lg:top-[9rem] lg:px-[1.5rem] xl:h-[42rem] xl:px-[7rem] 2xl:h-[35rem] cd:h-[28rem] cd:left-[2rem]"
            />
          </div>

          <div className="lg:flex ">
            <div className="absolute right-0 top-[10rem] md:right-10 lg:flex lg:px-2 lg:top-[10rem] xl:top-[13rem] lg:right-0 2xl:top-[12.5rem]cd:absolute cd:top-[10rem]">
              <img src="/assets/Frame7.png" className=" h-[6rem] sm:h-[8rem] md:h-[8rem] lg:h-[10.5rem] xl:h-[13.5rem] xl:px-1 2xl:h-[15.5rem] " />
              <img src="/assets/Frame7.png" className=" h-[6rem] sm:h-[8rem] md:h-[8rem] lg:h-[10.5rem] xl:h-[13.5rem] xl:px-1 2xl:h-[15.5rem]" />
              <img src="/assets/Frame7.png" className=" h-[6rem] sm:h-[8rem] md:h-[8rem] lg:h-[10.5rem] xl:h-[13.5rem] xl:px-1 2xl:h-[15.5rem]" />
            </div>

            <div className="absolute right-0 top-[10rem] sm:right-[11rem] md:right-[16rem] lg:flex lg:top-[20rem] lg:right-0 lg:px-2 xl:top-[28rem] 2xl:top-[31rem] cd:absolute cd:top-[23.5rem]">
              <img src="/assets/Frame7.png" className=" h-[6rem] sm:h-[8rem] md:h-[8rem] lg:h-[10.5rem] lg:my-[1rem] xl:h-[13.5rem] xl:px-1 2xl:h-[15.5rem]" />
              <img src="/assets/Frame7.png" className=" h-[6rem] sm:h-[8rem] md:h-[8rem] lg:h-[10.5rem] lg:my-[1rem] xl:h-[13.5rem] xl:px-1 2xl:h-[15.5rem]" />
              <img src="/assets/Frame7.png" className=" h-[6rem] sm:h-[8rem] md:h-[8rem] lg:h-[10.5rem] lg:my-[1rem] xl:h-[13.5rem] xl:px-1 2xl:h-[15.5rem]" />
            </div>
          </div>
        </div>
      </div>
    </Bg>
  );
};

export default page;
