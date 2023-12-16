import Image from "next/image";
import { FaStar } from "react-icons/fa";
import React from "react";

const Reviews = () => {
  return (
    <div className="border bg-taelish-blue">
      <div className=" w-[80%] mx-auto grid grid-cols-3 border">
        {/* card */}
        {/* {reviewsData.map((review) => (
          <div
            key={review.id}
            className="border flex flex-col justify-center items-center text-center gap-4"
          >
            <Image
              src={review.imagePath}
              alt={review.altText}
              height={40}
              width={40}
              className="rounded-full"
            />
            <div className="flex gap-1">
              {[...Array(review.stars)].map((_, index) => (
                <FaStar key={index} className="text-yellow-500" />
              ))}
            </div>
            <p className="text-slate-500">{review.reviewText}</p>
            <p className="text-indigo-500">{review.rating}</p>
          </div>
        ))} */}
        {reviewsData.map((element) => {
          return(

          )
        })}
        
      </div>
    </div>
  );
};

export default Reviews;
const reviewsData = [
  {
    imagePath: "/reviews/testimonial-01.jpg",
    altText: "Testimonial 1",
    stars: 5,
    reviewText:
      "Unbelievable returns! This investment has completely transformed my financial future. I've never seen anything like it.",
    rating: "4.9/5",
  },
];
