import Image from "next/image";
import { FaStar } from "react-icons/fa";
import React from "react";

const Reviews = () => {
  return (
    <div className="border bg-taelish-blue">
      <div className=" w-[80%] mx-auto grid grid-cols-3 border">
        {/* card */}
        <div className="border flex flex-col justify-center items-center text-center gap-4">
          {/* <div className="h-10  w-10 rounded-full"> */}
          <Image
            src="/reviews/testimonial-01.jpg"
            alt=""
            height={40}
            width={40}
            className="rounded-full"
          />
          <div className="flex gap-1">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
          </div>
          <p className="text-slate-500">
            &quot;Unbelievable returns! This investment has completely
            transformed my financial future. I&apos;ve never seen anything like
            it.&quot;
          </p>

          <p className="text-indigo-500">4.9/5</p>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
