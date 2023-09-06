import React from "react";
import { HomeStaysData } from "../../Data/HomeStaysData";
import { AiTwotoneStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { TbWash } from "react-icons/tb";
import { FaBed } from "react-icons/fa";

export default function HomeStays() {
  return (
    <div className="px-[100px] pt-[60px] bg-[#eeeeee]">
      <div className="text-[#2ba189] font-bold text-[25px] mb-3">HomeStays</div>
      <div className="mt-4 grid grid-cols-3 gap-3 justify-center bg-[#eeeeee]">
        {HomeStaysData.map((item) => {
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
                  <div className="text-[#9a9a9a]">{item.rate}</div>
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
                </div>
                <div className="flex mt-[4px] font-bold">
                  <div>
                    <AiOutlineHeart />
                  </div>
                  <div>
                    <BsBookmark />
                  </div>
                </div>
              </div>
              <div className="px-6 mb-1 font-bold">{item.HotelName}</div>
              <div className="px-6 mb-1 flex justify-between">
                <div className="text-[13px] text-[#858585]">
                  {item.location}
                </div>
                <div className="text-[13px] text-[#858585]">{item.Kilo}</div>
              </div>
              <div className="bg-[#e6e5e5] h-[1px] mx-6  my-3"></div>
              <div className="flex justify-between">
                <div className="px-6 flex space-x-2 text-[13px] text-[#858585]">
                  <div className="mt-[3px]">
                    <BsPeopleFill />
                  </div>
                  <div>{item.peopleNo}</div>
                </div>
                <div className="px-6 flex space-x-2 text-[13px] text-[#858585]">
                  <div className="mt-[3px]">
                    <TbWash />
                  </div>
                  <div>{item.ShowerNo}</div>
                </div>
                <div className="px-6 flex space-x-2 text-[#858585]">
                  <div className="mt-[3px]">
                    <FaBed />
                  </div>
                  <div>{item.qty}</div>
                </div>
              </div>
              <div className="px-6 flex justify-between mt-5">
                <div className="text-[18px] mt-[14px]">
                  <b>
                    <del className="text-[#f6611f]">
                      <span className="text-[#f6611f]">$129</span>
                    </del>{" "}
                    / 100
                  </b>
                </div>
                <div>
                  <button className="px-8 py-3 bg-[#2ba189] text-white rounded-full">
                    Book Now
                  </button>
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
