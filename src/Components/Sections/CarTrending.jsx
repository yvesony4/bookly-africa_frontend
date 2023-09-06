import React from "react";
import { CarTrendingData } from "../../Data/CarTrendingData";
import { AiOutlinePauseCircle } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { FaGasPump } from "react-icons/fa";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiFillCar } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";

export default function CarTrending() {
  return (
    <div className="px-[100px] pt-[60px] bg-gray-200">
      <div className="flex justify-between">
        <div className="text-[#2ba189] font-bold text-[25px] mb-3">
          Car Trending
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
      <div className="mt-4 grid grid-cols-3 gap-3 justify-center bg-gray-200">
        {CarTrendingData.map((item) => {
          return (
            <div
              className={`${
                item.type !== "1" ? "hidden" : null
              } bg-[white] rounded-3xl  pb-[40px]`}
            >
              <div>
                <img
                  className="rounded-3xl w-full h-[300px] object-cover"
                  src={item.photo}
                  alt=""
                />
              </div>
              <div className="flex justify-between text-[20px] px-6 mt-1 font-bold">
                <div>{item.HotelName}</div>
                <div className="pt-1">
                  <AiOutlineHeart />
                </div>
              </div>
              <div className="px-6 mb-1 flex justify-between">
                <div className="text-[13px] text-[#858585]">
                  {item.location}
                </div>
              </div>
              <div className="bg-[#e6e5e5] h-[1px] mx-6  my-3"></div>
              <div className="flex justify-between px-6">
                <div className=" flex text-[13px]">
                  <div className="mt-[3px]">
                    <MdAirlineSeatReclineExtra className="text-[23px] text-[#f16f39]" />
                  </div>
                  <div className="pt-[5px]">5</div>
                </div>
                <div className="px-6 flex space-x-1 text-[13px]">
                  <div className="mt-[3px]">
                    <AiOutlinePauseCircle className="text-[23px] text-[#f16f39]" />
                  </div>
                  <div className="pt-[5px]">Auto</div>
                </div>
                <div className="px-6 flex space-x-1 text-[13px]">
                  <div className="mt-[3px]">
                    <AiFillCar className="text-[23px] text-[#f16f39]" />
                  </div>
                  <div className="pt-[5px]">4</div>
                </div>
                <div className="px-6 flex space-x-1 text-[13px]">
                  <div className="mt-[3px]">
                    <FaGasPump className="text-[23px] text-[#f16f39]" />
                  </div>
                  <div className="pt-[5px]">Gas</div>
                </div>
              </div>
              <div className="flex justify-between px-7 py-2 pt-8">
                <div className="flex pt-2">
                  <div className="flex">
                    <div>
                      <BiDollar className="text-[20px] pt-1" />
                    </div>
                    <div>{item.qty}/</div>
                  </div>
                  <div>{item.time}</div>
                </div>
                <div>
                  <button className="bg-[#2ba189] px-6 py-2 rounded text-white">
                    Reserve Now
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
