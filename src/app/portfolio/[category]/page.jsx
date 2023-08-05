import Button from "@/components/button/Button";
import Image from "next/image";
import React from "react";

const data = [
  {
    id: 1,
    title: "Creative portfolio",
    desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
    doloribus incidunt quas sequi quo impedit eaque facere velit dolor
    suscipit!`,
    imgUrl:
      "https://images.pexels.com/photos/17593738/pexels-photo-17593738/free-photo-of-a-person-on-a-bicycle-at-ark-of-bukhara.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 2,
    title: "Creative portfolio",
    desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
    doloribus incidunt quas sequi quo impedit eaque facere velit dolor
    suscipit!`,
    imgUrl:
      "https://images.pexels.com/photos/7794434/pexels-photo-7794434.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    title: "Creative portfolio",
    desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
    doloribus incidunt quas sequi quo impedit eaque facere velit dolor
    suscipit!`,
    imgUrl:
      "https://images.pexels.com/photos/7319283/pexels-photo-7319283.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Category = ({ params }) => {
  return (
    <div className="my-11">
      <h1 className="text-4xl font-bold my-3 bg-gradient-to-b from-green-500 to-gray-300 bg-clip-text text-transparent">
        {params.category}
      </h1>
      {data.map((item) => {
        let mainDiv = " flex my-10";
        let secondDiv = " flex-1 flex flex-col gap-10 justify-center";
        if (item.id % 2 == 0) {
          mainDiv += " flex-row-reverse";
          secondDiv += " px-10";
        }
        return (
          <div className={mainDiv} key={item.id}>
            <div className={secondDiv}>
              <h2 className="text-xl font-bold ">{item.title}</h2>
              <p>{item.desc}</p>
              <Button text={"see more"} url={"#"} />
            </div>
            <div className="flex-1 relative h-[400px]">
              <Image
                className="object-cover "
                src={item.imgUrl}
                fill={true}
                alt="tor amre sudi"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
