import Link from "next/link";
import React from "react";

const linkUrl = [
  {
    id: 1,
    URL: "/portfolio/illustration",
    text: "Illustration",
    urlimg: "/illustration.png",
  },

  {
    id: 2,
    URL: "/portfolio/websites",
    text: "Websites",
    urlimg: "/websites.jpg",
  },

  {
    id: 3,
    URL: "/portfolio/application",
    text: "Application",
    urlimg: "/apps.jpg",
  },
];

const Portfolio = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold my-5">Choose a gallery </h1>
      <div className="flex gap-9 my-5  py-4">
        {linkUrl.map((link) => {
          return (
            <Link
              key={link.id}
              href={link.URL}
              className="border-2 border-solid border-gray-200 w-[300px] h-[400px] relative bg-cover hover:text-green-500"
              style={{ backgroundImage: `url(${link.urlimg})` }}
            >
              <span className="absolute right-3 bottom-3 text-4xl font-bold ">
                {link.text}
              </span>{" "}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
