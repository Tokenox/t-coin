import Image from "next/image";
import { MdStarRate } from "react-icons/md";
import React from "react";

const Reviews = () => {
  return (
    <div className=" bg-taelish-blue">
      <div className=" w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
        {/* card */}
        {reviewsData.map((review) => {
          return (
            <>
              <div className="flex flex-col justify-center items-center text-center py-7 px-2 gap-4 ">
                <Image
                  src={review.imagePath}
                  alt={review.altText}
                  height={50}
                  width={50}
                  className="rounded-full "
                />
                <div className="flex">
                  {[...Array(review.stars)].map(() => {
                    return (
                      <>
                        <MdStarRate className="text-yellow-500 text-xl" />
                      </>
                    );
                  })}
                </div>
                <div>
                  <p className="text-slate-500 italic text-lg ">
                    {review.reviewText}
                  </p>
                </div>
                <p className="text-indigo-500 text-base ">{review.rating}</p>
              </div>
            </>
          );
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

  {
    imagePath: "/reviews/testimonial-02.jpg",
    altText: "Testimonial 2",
    stars: 5,
    reviewText:
      "As a seasoned investor, I can confidently say this is the best opportunity I've come across. The results speak for themselves - unparalleled growth and impressive profits.",
    rating: "4.7/5",
  },
  {
    imagePath: "/reviews/testimonial-03.jpg",
    altText: "Testimonial 3",
    stars: 5,
    reviewText:
      "I was sceptical at first, but after diving in, I can say without a doubt that this is the best investment move I've ever made. The returns are simply mind-blowing",
    rating: "4.9/5",
  },
];
