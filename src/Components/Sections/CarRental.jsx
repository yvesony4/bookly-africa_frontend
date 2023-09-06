import React from "react";
import { CarTrendingData } from "../../Data/CarTrendingData";
import { AiOutlinePauseCircle } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { FaGasPump } from "react-icons/fa";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import Vector243 from "../../assets/booklimages/Vector243.png";

export default function CarRental() {
  return (
    <div className="px-[100px] pt-[60px] ">
      <div className="">
        <div className="text-[#2ba189] font-bold text-[25px] mb-3">
          Find the best car hire deals in Rwanda
        </div>
        <div>
          <div className="">
            <img className="w-[230px]" src={Vector243} alt="" />
          </div>
          <div className="text-[10px] ml-[150px]">
            Here are the most popular types of rental car you can pick up from a
            point near you in the next 30 days.
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3 justify-center ">
        {CarTrendingData.map((item) => {
          return (
            <div className="bg-[white] rounded-3xl  pb-[40px]">
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
              {/* <div className='px-6 flex justify-between mt-5'>
                            <div className='text-[18px] mt-[14px]'><b><del className='text-[#f6611f]'><span className='text-[#f6611f]'>$129</span></del> / 100</b></div>
                            <div><button className='px-8 py-3 bg-[#2ba189] text-white rounded-full'>Book Now</button></div>
                            </div> */}
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
            Show More
          </button>
        </div>
      </div>
    </div>
  );
}
