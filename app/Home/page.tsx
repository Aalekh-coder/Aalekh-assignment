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
              className="h-[18rem] absolute top-[10rem] left-1 sm:h-[22rem] md:h-[24rem] lg:h-[33rem] lg:pl-5 xl:h-[42rem] 2xl:h-[35rem]"
            />
          </div>

          <div className="">
            <img
              src="/assets/Group165.png"
              className="h-[15rem] absolute left-[5rem] top-[11rem] sm:h-[20rem] sm:left-[7rem] md:h-[24rem] lg:h-[33rem] lg:px-[5rem] xl:h-[42rem] xl:px-[7rem] 2xl:h-[35rem]"
            />
          </div>

          <div className="lg:flex ">
            <div className="absolute right-0 top-[10rem] lg:flex lg:px-2 lg:top-[15rem] xl:top-[13rem] 2xl:top-[12.5rem]">
              <img src="/assets/Frame7.png" className=" h-[6rem] sm:h-[8rem] md:h-[9rem] xl:h-[13.5rem] xl:px-1 2xl:h-[15.5rem]" />
              <img src="/assets/Frame7.png" className=" h-[6rem] sm:h-[8rem] md:h-[9rem] xl:h-[13.5rem] xl:px-1 2xl:h-[15.5rem]" />
              <img src="/assets/Frame7.png" className=" h-[6rem] sm:h-[8rem] md:h-[9rem] xl:h-[13.5rem] xl:px-1 2xl:h-[15.5rem]" />
            </div>

            <div className="absolute right-0 top-[10rem] sm:right-[11rem] md:right-[14rem] lg:flex lg:top-[25rem] lg:right-0 lg:px-2 xl:top-[28rem] 2xl:top-[31rem]">
              <img src="/assets/Frame7.png" className=" h-[6rem] sm:h-[8rem] md:h-[9rem] xl:h-[13.5rem] xl:px-1 2xl:h-[15.5rem]" />
              <img src="/assets/Frame7.png" className=" h-[6rem] sm:h-[8rem] md:h-[9rem] xl:h-[13.5rem] xl:px-1 2xl:h-[15.5rem]" />
              <img src="/assets/Frame7.png" className=" h-[6rem] sm:h-[8rem] md:h-[9rem] xl:h-[13.5rem] xl:px-1 2xl:h-[15.5rem]" />
            </div>
          </div>
        </div>
      </div>
    </Bg>
  );
};

export default page;
