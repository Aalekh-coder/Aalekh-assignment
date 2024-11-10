// import Image from "next/image";

// const Bg = ({children}) => {
//   return (
//     <div className="relative w-full h-screen ">
//       <Image
//         src="/assets/bg.png"
//         layout="fill"
//         objectFit="cover"
//         alt="Background Image"
//         className="absolute inset-0 -z-10"
//       />
//       {children}
//     </div>
//   );
// };

// export default Bg;


// responsive

import Image from "next/image";

const Bg = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen">
      <Image
        src="/assets/bg.png"
        layout="fill"
        objectFit="cover"
        alt="Background Image"
        className="absolute inset-0 -z-10 object-cover w-full h-full"
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
        priority // Loads the image as a priority for better performance
      />
      <div className="relative flex flex-col items-center justify-center px-4 py-8 sm:px-6 lg:px-8 xl:px-10 text-center">
        {children}
      </div>
    </div>
  );
};

export default Bg;
