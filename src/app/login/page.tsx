import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
      {/* BOX */}
      <div className="h-full rounded-md flex flex-col md:flex-row md:h-[90%] md:w-full">
        {/*Image Container*/}
        <div className="relative h-[90%] w-full md:h-full md:w-1/2">
          <Image src="/loginBg.png" alt="" fill className="object-cover" />
        </div>
        {/* Form Container */}
        <div className="p-10 flex flex-col gap-8 md:w-1/2">
          <h1 className="font-bold text-xl md:text-3xl">Welcome</h1>
          <p className="md:text-lg">
            Log into your account or create a new one using social buttons
          </p>
          <button className="flex  gap-4 p-4 ring-1 ring-orange-100 rounded-md">
            <Image
              src="/google.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with google</span>
          </button>
          <button className="flex  gap-4 p-4 ring-1 ring-blue-100 rounded-md">
            <Image
              src="/facebook.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Facebook</span>
          </button>
          <p className="text-sm">
            Have a problem ?{" "}
            <Link href="/" className="underline">
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
