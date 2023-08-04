import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 flex items-center justify-between">
      <div>
        <h1> &copy; All right reserved limamia </h1>
      </div>
      <div className="flex items-center gap-2">
        <Image
          className="opacity-60 cursor-pointer"
          src="/1.png"
          width={15}
          height={15}
          alt="facebook"
        />
        <Image
          className="opacity-60 cursor-pointer"
          src="/2.png"
          width={15}
          height={15}
          alt="instagram"
        />
        <Image
          className="opacity-60 cursor-pointer"
          src="/3.png"
          width={15}
          height={15}
          alt="tmitter"
        />
        <Image
          className="opacity-60 cursor-pointer"
          src="/4.png"
          width={15}
          height={15}
          alt="youtube"
        />
      </div>
    </div>
  );
};

export default Footer;
