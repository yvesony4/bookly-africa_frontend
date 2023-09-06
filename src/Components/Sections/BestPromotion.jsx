import React from "react";
import { BestPromotionData } from "../../Data/BestPromotionData";
import { AiTwotoneStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function BestPromotion() {
  return (
    <div className="px-[100px] pt-[60px] bg-[#d3f8f2]">
      <div className="flex justify-between">
        <div className="text-[#2ba189] font-bold text-[25px] mb-3">
          Our best promotion tours
        </div>
        <div className="flex gap-2">
          <div className="border rounded-full border-[#2ba189]  p-[10px] w-[40px] h-[40px]">
            <AiOutlineArrowLeft className="text-[#2ba189]" />
          </div>
          <div className="border rounded-full bg-[#2ba189] border-[#2ba189] p-[10px] w-[40px] h-[40px]">
            <AiOutlineArrowRight className="text-white" />
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3 justify-center bg-[#d3f8f2]">
        {BestPromotionData.map((item) => {
          return (
            <div className="bg-[white] rounded-3xl  pb-[40px]">
              <div>
                <img
                  className="rounded-3xl w-full h-[300px] object-cover"
                  src={item.photo}
                  alt=""
                />
              </div>
              <div className="flex justify-between px-6 mt-1">
                <div className="flex space-x-2">
                  <div className="flex mt-[4px]">
                    <div>
                      <AiTwotoneStar className="text-[#f8dc00]" />
                    </div>
                    <div>
                      <AiTwotoneStar className="text-[#f8dc00]" />
                    </div>
                    <div>
                      <AiTwotoneStar className="text-[#f8dc00]" />
                    </div>
                    <div>
                      <AiTwotoneStar className="text-[#f8dc00]" />
                    </div>
                    <div>
                      <AiTwotoneStar className="text-[#fbf5ce]" />
                    </div>
                  </div>
                  <div className="text-[#9a9a9a]">{item.rate}</div>
                </div>
                <div className="flex mt-[4px] font-bold">
                  <div>
                    <AiOutlineHeart />
                  </div>
                </div>
              </div>
              <div className="px-6 mb-1 font-bold">{item.HotelName}</div>
              <div className="px-6 mb-1 flex justify-between">
                <div className="text-[13px] text-[#858585]">
                  {item.location}
                </div>
              </div>
              <div className="bg-[#e6e5e5] h-[1px] mx-6  my-3"></div>
              <div className="flex justify-between">
                <div className="px-6 flex space-x-2 text-[13px] text-[#858585]">
                  <div className="mt-[3px]">
                    <BsClock />
                  </div>
                  <div>{item.time}</div>
                </div>
                <div className="px-6 flex text-[#31ac9e]">
                  <div className="mt-[4px]">
                    <BiDollar className="text-[22px]" />
                  </div>
                  <div className="text-[20px]">{item.qty}</div>
                </div>
              </div>
            </div>
          );
        })}

        <div>
          <button className="bg-[#2ba189] px-12 my-8 py-2 rounded text-white">
            View All
          </button>
        </div>
      </div>
    </div>
  );
}
