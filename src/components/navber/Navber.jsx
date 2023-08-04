import Link from "next/link";
import React from "react";

const Links = [
  {
    id: 1,
    title: "home",
    url: "/",
  },

  {
    id: 2,
    title: "portfolio",
    url: "/portfolio",
  },

  {
    id: 3,
    title: "blog",
    url: "/blog",
  },

  {
    id: 4,
    title: "about",
    url: "/about",
  },

  {
    id: 5,
    title: "contact",
    url: "/contact",
  },

  {
    id: 6,
    title: "dashboard",
    url: "/dashboard",
  },
];

const Navber = () => {
  return (
    <div className="h-20 flex items-center justify-between ">
      <div>
        <Link
          className="font-bold text-2xl bg-gradient-to-r from-green-500 to-gray-300 bg-clip-text text-transparent"
          href="/"
        >
          limamia
        </Link>
      </div>

      <div className="flex items-center gap-5">
        {Links.map((link) => {
          return (
            <Link
              className="bg-gradient-to-r from-green-500 to-gray-300 bg-clip-text text-transparent"
              key={link.id}
              href={link.url}
            >
              {link.title}
            </Link>
          );
        })}
        <button
          className="px-2 py-[3px] border-none bg-green-500 text-white cursor-pointer rounded"
          type="button"
        >
          {" "}
          log out
        </button>
      </div>
    </div>
  );
};

export default Navber;
