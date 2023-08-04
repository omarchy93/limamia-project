import Image from "next/image";
import React from "react";
import Hero from "public/hero.png";
import Button from "@/components/button/Button";

const HomePage = () => {
  return (
    <div className="flex items-center gap-24">
      <div className="flex-1 flex flex-col gap-12">
        <h1 className=" text-6xl font-bold bg-gradient-to-b from-green-500 to-gray-300 bg-clip-text text-transparent">
          this is a design for Limamia
        </h1>
        <p className="text-lg font-medium">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, autem
          voluptatum hic quibusdam minima reiciendis dolores enim possimus.
        </p>
        <Button url="portfolio" text="  See our Work" />
      </div>
      <div className="flex-1 flex flex-col gap-12">
        <Image
          src={Hero}
          alt="hero img"
          className="w-full h-auto object-cover animate-little-Bounce"
        />
      </div>
    </div>
  );
};

export default HomePage;
