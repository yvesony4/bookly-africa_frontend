import React from "react";
import { UpComingEventData } from "../../Data/UpComingEventData";
import Vector243 from "../../assets/booklimages/Vector243.png";

export default function UpComingEventNew() {
  return (
    <div className="px-[100px] py-[60px] bg-[#f0f0f0]">
      <div className="">
        <div className="text-[#2ba189] font-bold text-[25px] mb-3">
          Up Coming events
        </div>
        <div className="mb-5">
          <img className="w-[230px]" src={Vector243} alt="" />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3 justify-center bg-[#f0f0f0]">
        {UpComingEventData.map((item) => {
          return (
            <div className="bg-[white] rounded-3xl  pb-[40px]">
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
      </div>
    </div>
  );
}
