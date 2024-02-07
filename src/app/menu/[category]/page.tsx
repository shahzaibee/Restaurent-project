import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryPage = () => {
  return (
    <div className="flex flex-wrap text-red-500">
      {pizzas.map((item) => (
        <Link
          href={`/product/${item.id}`}
          key={item.id}
          className="w-full group odd:bg-fuchsia-50 h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 md:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between"
        >
          {/* IMAGE CONTAINER */}
          {item.img && (
            <div className="relative h-[80%]">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className="flex justify-between items-center font-bold">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            <p className="group-hover:hidden text-xl">${item.price}</p>
            <button className="hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
