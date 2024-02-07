"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

//TEMOPORARY
const user = false;

const Menu = () => {
  const [open, SetOpen] = useState(false);

  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt="menu"
          width={20}
          height={20}
          onClick={() => SetOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt="menu"
          width={20}
          height={20}
          onClick={() => SetOpen(false)}
        />
      )}
      {open && (
        <div className="bg-red-500 absolute text-white left-0 top-24 h-[calc(100vh-6rem)] flex justify-center items-center flex-col text-3xl gap-8 w-full z-10">
          {links.map((item, index) => (
            <Link key={item.id} href={item.url} onClick={() => SetOpen(false)}>
              {item.title}
            </Link>
          ))}
          {!user ? (
            <Link href="/orders">Orders</Link>
          ) : (
            <Link href="/login">Login</Link>
          )}
          <Link href="/cart" onClick={() => SetOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
