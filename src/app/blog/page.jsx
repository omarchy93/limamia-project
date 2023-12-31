import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 36 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const imgData = [
  {
    imgurl:
      "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=900",
  },

  {
    imgurl:
      "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=900",
  },

  {
    imgurl:
      "https://images.pexels.com/photos/2440021/pexels-photo-2440021.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    imgurl:
      "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

// eslint-disable-next-line @next/next/no-async-client-component
const Blog = async () => {
  const data = await getData();
  return (
    <div>
      {data.map((item) => {
        const imgRandomItem = Math.floor(Math.random() * imgData.length);

        const imgItem = (imgRandomItem, imgData[imgRandomItem]);
        return (
          <Link href={"/blog/" + item.id} key={item.id}>
            <div className="flex gap-5">
              <div className=" flex-1 my-5 h-[300px] w-[400px] relative">
                I
                <Image
                  src={imgItem.imgurl}
                  alt="bolg img"
                  fill={true}
                  className="object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col  justify-center gap-5">
                <h2 className="text-2xl font-bold ">{item.title}</h2>
                <p className=" text-lg font-semibold">{item.body}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Blog;
