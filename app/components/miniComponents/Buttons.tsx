import Image from "next/image";

const Buttons = () => {
  return (
    <div className="flex gap-20">
      <Image src="/assets/Group186.png" height={50} width={50} alt="btn" />
      <Image src="/assets/Group185.png" height={50} width={50} alt="btn" />
    </div>
  );
};

export default Buttons;
