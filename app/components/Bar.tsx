const Bar = () => {
  return (
    <div
      className="flex items-center justify-center h-[26rem] bg-contain bg-no-repeat bg-center -z-30 md:h-[20rem]"
      style={{ backgroundImage: "url('/assets/Group91.png')" }}
    >
      {/* Add other content here if needed */}
      <div className="flex flex-col items-center md:gap-1 ">
        <img src="/assets/Group90.png" className="w-[4.9rem] md:w-12 sm:w-10" />
        <div className="">
          <img src="/assets/Group47.png" className="w-16 mt-1 md:w-10" />
          <img src="/assets/Group74.png" className="w-16 md:w-10" />
          <img src="/assets/Group49.png" className="w-16 mt-3 md:w-10" />
          <div className="flex flex-col items-center justify-center">
            <img
              src="/assets/Maskgroup.png"
              className="w-16 md:w-10 md:top-5"
            />
            <img
              src="/assets/Group50 .png"
              className="w-12 mb-2 relative -top-1 md:w-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bar;
