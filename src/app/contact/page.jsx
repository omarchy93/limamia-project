import Image from "next/image";
import React from "react";
import ContactImg from "public/contact.png";
import Button from "@/components/button/Button";

const Contact = () => {
  return (
    <div className="my-11 px-20">
      <h1 className="text-center text-5xl text-gray-300 font-extrabold mb-20 mt-3">
        {" "}
        Let&#39;s Keep in Touch
      </h1>
      <div className="flex gap-[100px] ">
        <div className="flex-1 h-[500px] relative">
          <Image
            src={ContactImg}
            alt="contact img"
            fill={true}
            className="object-contain animate-little-Bounce	"
          />
        </div>
        <form className="flex-1 flex flex-col gap-5">
          <input
            type="text"
            placeholder="name"
            className="p-3 bg-transparent outline-none border-[1px] border-solid border-gray-300 text-base font-semibold"
          />
          <input
            type="email"
            placeholder="eamil"
            className="p-3 bg-transparent outline-none border-[1px] border-solid border-gray-300 text-base font-semibold"
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="message"
            className="p-3 bg-transparent outline-none border-[1px] border-solid border-gray-300 text-base font-semibold"
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
