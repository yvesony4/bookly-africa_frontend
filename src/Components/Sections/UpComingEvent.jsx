import React from "react";
import { UpComingEventData } from "../../Data/UpComingEventData";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function UpComingEvent() {
  return (
    <div className="px-[100px] pt-[60px] bg-[#f0f0f0]">
      <div className="flex justify-between">
        <div className="text-[#2ba189] font-bold text-[25px] mb-3">
          Up Coming events
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
      <div className="mt-4 grid grid-cols-3 gap-3 justify-center bg-[#f0f0f0]">
        {UpComingEventData.map((item) => {
          return (
            <div
              className={`${
                item.type === "2" ? "hidden" : null
              } bg-[white] rounded-3xl  pb-[40px]`}
            >
              <div>
                <img
                  className="rounded-3xl w-full h-[300px] object-cover"
                  src={item.photo}
                  alt=""
                />
              </div>
              <div className="flex justify-between text-[13px] px-6 mt-4">
                <div className="text-[#858585]">{item.HotelName}</div>
              </div>
              <div className="px-6 mb-1 flex justify-between">
                <div className="text-[16px] text-[#2ba189]">
                  {item.location}
                </div>
              </div>
              <div className="bg-[#e6e5e5] h-[2px] mx-6 "></div>

              <div className="flex justify-between px-7 py-2">
                <div>
                  <button className="bg-[#2ba189] px-6 py-2 rounded text-white">
                    Read More
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
