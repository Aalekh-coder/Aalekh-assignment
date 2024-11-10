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
              className="h-[18rem] absolute top-[10rem] left-1 sm:h-[22rem]"
            />
          </div>

          <div className="">
            <img
              src="/assets/Group165.png"
              className="h-[15rem] absolute left-[5rem] top-[11rem] sm:h-[20rem] sm:left-[7rem]"
            />
          </div>

          <div>
            <div className="absolute right-0 top-[10rem]  ">
              <img src="/assets/Frame7.png" className=" h-[6rem] sm:h-[8rem]" />
              <img src="/assets/Frame7.png" className=" h-[6rem] sm:h-[8rem]" />
              <img src="/assets/Frame7.png" className=" h-[6rem] sm:h-[8rem]" />
            </div>

            <div className="absolute right-0 top-[10rem] sm:right-[11rem]">
              <img src="/assets/Frame7.png" className=" h-[6rem] sm:h-[8rem]" />
              <img src="/assets/Frame7.png" className=" h-[6rem] sm:h-[8rem]" />
              <img src="/assets/Frame7.png" className=" h-[6rem] sm:h-[8rem]" />
            </div>
          </div>
        </div>
      </div>
    </Bg>
  );
};

export default page;
