// // import Image from "next/image";

// // const ScoreBoard = ({ scale = 1 }) => {
// //   return (
// //     <div style={{ transform: `scale(${scale})` }} className="transform origin-center">
// //       <div className="flex items-center justify-around">
// //         <Image
// //           src="/assets/Group184.png"
// //           height={300}
// //           width={300}
// //           alt="scoreRing"
// //           className="absolute -z-50"
// //         />
// //         <div className="flex items-center gap-4">
// //           <Image
// //             src="/assets/chip.png"
// //             height={110}
// //             width={110}
// //             alt="chip"
// //             className="z-30"
// //           />
// //           <Image
// //             src="/assets/0.00.png"
// //             height={100}
// //             width={100}
// //             alt="scoreRing"
// //             className="z-30 mr-9"
// //           />
// //           <div>
// //             <Image
// //               src="/assets/PlusCircle.png"
// //               height={90}
// //               width={90}
// //               alt="plusCircle"
// //               className="absolute z-30"
// //             />
// //             <Image
// //               src="/assets/add_button 1.png"
// //               height={90}
// //               width={90}
// //               alt="addButton"
// //               className="z-30"
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ScoreBoard;


// const ScoreBoard = ({ scale = 1 }) => {
//   return (
//     <div style={{ transform: `scale(${scale})` }} className="transform origin-center">
//       <div className="flex items-center justify-around">
//         <img
//           src="/assets/Group184.png"
//           alt="scoreRing"
//           className="absolute -z-50"
//         />
//         <div className="flex items-center gap-4">
//           <img
//             src="/assets/chip.png"
//             alt="chip"
//             className="z-30"
//           />
//           <img
//             src="/assets/0.00.png"
//             alt="scoreRing"
//             className="z-30 mr-9"
//           />
//           <div>
//             <img
//               src="/assets/PlusCircle.png"
//               alt="plusCircle"
//               className="absolute z-30 p-0.5"
//             />
//             <img
//               src="/assets/add_button 1.png"
//               alt="addButton"
//               className="z-30"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScoreBoard;


// chat gpt

import Image from "next/image";

const ScoreBoard = ({ scale = 1 }) => {
  return (
    <div
      style={{ transform: `scale(${scale})` }}
      className="transform origin-center p-4 md:p-6 lg:p-8"
    >
      <div className="relative flex items-center justify-around gap-4 md:gap-6 lg:gap-8">
        {/* Background Ring Image */}
        <div className="absolute inset-0 flex justify-center items-center -z-10">
          <Image
            src="/assets/Group184.png"
            alt="scoreRing"
            width={300}
            height={300}
            className="w-2/3 md:w-1/2 lg:w-1/3"
          />
        </div>

        {/* Foreground Elements */}
        <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
          <Image
            src="/assets/chip.png"
            alt="chip"
            width={110}
            height={110}
            className="w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 z-30"
          />
          <Image
            src="/assets/0.00.png"
            alt="scoreRing"
            width={100}
            height={100}
            className="w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 z-30 mr-4 md:mr-6 lg:mr-8"
          />

          <div className="relative flex flex-col items-center gap-2 md:gap-3">
            <Image
              src="/assets/PlusCircle.png"
              alt="plusCircle"
              width={90}
              height={90}
              className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 z-30"
            />
            <Image
              src="/assets/add_button 1.png"
              alt="addButton"
              width={90}
              height={90}
              className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 z-30"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
