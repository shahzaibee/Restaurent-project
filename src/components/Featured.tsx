import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      {/* Wrapper */}
      <div className="w-max flex">
        {/* Single item */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen md:w-[50vw] xl:w-[33vw] h-[60vh] xl:h-[90vh] flex flex-col items-center justify-around p-4  transition-all duration-300 cursor-pointer"
          >
            {/* Image */}
            {item.img && (
              <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                <Image src={item.img} alt="" fill className="object-contain" />
              </div>
            )}
            {/* text container */}
            <div className="flex-1 flex flex-col items-center text-center justify-center gap-4">
              <h1 className="text-xl xl:text-2xl 2xl:text-3xl font-bold uppercase">
                {item.title}
              </h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">{item.price}</span>
              <button className="bg-red-500 text-white p-2 rounded-md">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
