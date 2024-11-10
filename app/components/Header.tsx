const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-center ">
        <img src="/assets/Group183.png" className="h-14 absolute -top-1 sm:h-24 lg:h-[16vh] lg:absolute lg:-top-4" />
      </div>

      <div className="h-20 w-[90vw] flex justify-between ">
        <div className="">
          <img
            src="/assets/bronze_frame_with_bronze_crown.png"
            className="h-10 mb-1 sm:h-16 sm:absolute sm:top-4 md:left-1 lg:h-13 lg:pl-10 xl:h-[10vh]"
          />
          <img src="/assets/scorebar.png" className="h-10 sm:h-10 sm:absolute sm:top-[15vh] md:top-7 md:left-[10vw] lg:pl-10 xl:pl-3 xl:top-[4vh] xl:h-[6vh]" />
        </div>

        <div className="sm:flex sm:gap-4 lg:absolute lg:right-10 lg:top-4 lg:gap-[2vh] 2xl:gap-[3vh] 2xl:top-8">
          <img src="/assets/Group186.png" className="h-10 mb-1 sm:h-12 xl:h-[7vh]" />
          <img src="/assets/Group185.png" className="h-10 sm:h-12 xl:h-[7vh]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
