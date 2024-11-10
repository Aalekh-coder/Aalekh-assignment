import Image from "next/image"

const CancelBtn = () => {
  return (
      <div>
          <Image src="/assets/Group186.png" height={100} width={100} alt="btn" className="absolute -z-30"/>
          <Image src="/assets/Group185.png" height={100} width={100} alt="btn" />
    </div>
  )
}

export default CancelBtn