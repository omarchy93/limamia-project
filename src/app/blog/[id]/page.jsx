import Image from "next/image";
import React from "react";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/` + id, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getUserData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/` + id, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const imgData = [
  {
    imgurl:
      "https://images.pexels.com/photos/1468378/pexels-photo-1468378.jpeg?auto=compress&cs=tinysrgb&w=600",
  },

  {
    imgurl:
      "https://images.pexels.com/photos/583124/pexels-photo-583124.jpeg?auto=compress&cs=tinysrgb&w=600",
  },

  {
    imgurl:
      "https://images.pexels.com/photos/839633/pexels-photo-839633.jpeg?auto=compress&cs=tinysrgb&w=600",
  },

  {
    imgurl:
      "https://images.pexels.com/photos/1500482/pexels-photo-1500482.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const BolgPost = async ({ params }) => {
  const postData = await getData(params.id);
  const userData = await getUserData(postData.userId);

  const imgRandomItem = Math.floor(Math.random() * imgData.length);
  const imgItem = (imgRandomItem, imgData[imgRandomItem]);
  return (
    <div>
      <div className="flex gap-10 p-5 m-5">
        <div className="flex-1 flex flex-col justify-start gap-6 text-justify">
          <h1 className="text-xl font-bold">{postData.title}</h1>
          <p className="text-base font-semibold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
            vel labore facere, mollitia fugiat culpa vitae iure velit voluptates
            magni eligendi aspernatur, molestias at officia deserunt nobis
            explicabo quos quod Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Molestiae iusto vero aliquid nulla, porro quae
            voluptatem enim, quasi excepturi aspernatur, quos ipsa! Beatae
            placeat voluptatem quia culpa quo ipsum ea!
          </p>
        </div>
        <div className=" flex-1 h-[400px] w-[420px] relative">
          <Image className="" src={imgItem.imgurl} alt="hi" fill={true} />
        </div>
      </div>
      <div className="p-5 m-5 ">
        <div className="h-10 w-10 relative ">
          <Image
            src={imgItem.imgurl}
            alt="clint icon"
            fill={true}
            className="rounded-full"
          />
          <div className="m-14">
            <p className="font-bold text-lg"> {userData.name}</p>
          </div>
        </div>
      </div>

      <div className="p-5 m-5 text-justify font-semibold">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          nostrum quibusdam laboriosam ea saepe animi labore facere reiciendis
          tempora! Ipsam, cum. Enim numquam qui quasi voluptas distinctio
          ratione debitis at?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          doloremque minima incidunt tenetur voluptates laboriosam explicabo
          exercitationem dignissimos deserunt totam autem dolore repellat omnis
          ad mollitia error obcaecati quibusdam adipisci sint alias accusamus
          porro, placeat similique facere. Minus a inventore cum maxime porro
          corporis veniam aperiam. Sunt quibusdam similique cumque hic libero
          eum aspernatur nihil saepe ratione necessitatibus rerum officia
          suscipit quae dolor nemo aliquid accusantium, in, repellendus
          cupiditate iure totam dicta consequatur, a optio. Accusantium nisi
          magnam facilis natus similique error neque explicabo quo dicta
          perspiciatis sapiente sequi excepturi, ex aspernatur repellendus
          laborum veniam quasi tempora nam libero quaerat.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsum
          sequi pariatur cum debitis ea eveniet, quis labore nobis commodi at
          voluptatum in alias recusandae odio? Dignissimos ipsa temporibus
          harum!
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
          cumque quam aperiam alias delectus, amet aspernatur nisi harum libero,
          iusto, facilis aliquam ad molestias quis officiis ab laborum ducimus.
          Ea! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Asperiores blanditiis consequuntur sed accusamus quas dolor quibusdam
          explicabo nemo qui non fugit nobis, commodi deserunt nisi dolores
          culpa quam. Incidunt, quo. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Necessitatibus assumenda quod at perferendis odio,
          cupiditate et qui maxime quia laboriosam? Ipsum, cum quibusdam sed
          magnam error corporis veritatis facilis praesentium!
        </p>
      </div>
    </div>
  );
};

export default BolgPost;
