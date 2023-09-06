import React from "react";
import { ExploreOptionData } from "../../Data/ExploreOptionData";
import { FaPoundSign } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function ExploreOption() {
  return (
    <div className="px-[360px] bg-[#d3f8f2] py-12">
      <div className="font-bold text-[40px]">Explore other Option</div>
      <div className="text-[25px] pt-2">Search for hotels close to</div>
      <div className="grid grid-cols-5 gap-2 pt-4">
        {ExploreOptionData.map((item) => {
          return (
            <div>
              <div className="h-[200px] relative">
                <img
                  className="rounded-xl h-full w-full object-cover"
                  src={item.Photo}
                  alt=""
                />
                <span className="text-[#161616] font-bold text-[17px] absolute top-3 bg-[#e0e3e5] rounded px-4 left-3">
                  {item.Category}
                </span>
                <span className="text-white font-bold text-[17px] absolute bottom-8 left-3">
                  {item.Name}
                </span>
                <span className="text-gray-200 flex  text-[11px] absolute bottom-4 left-3">
                  <div>{item.Prices} &nbsp;</div>
                  <div className="text-[9px] pt-[4px]">
                    <FaPoundSign />
                  </div>
                  <div>{item.PricesTotal}</div>
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-[25px] pt-12 pb-3">
        Couldn't find the right hotel for you?
      </div>
      <div className=" mb-[50px]  flex border border-gray-300 shadow-xl bg-white rounded-r-xl rounded-l-xl">
        <div className="w-full flex px-5 py-2">
          <div>
            <div className="px-3 text-gray-400 font-bold">
              Where do you want to stay
            </div>
            <div>
              <input
                type="text"
                className="text-blue-500 w-full border-none focus:ring-0 rounded-bl-xl font-bold"
                placeholder="Kigali , Rwanda"
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-300 w-3"></div>
        <div className="flex  px-5 py-2">
          <div className="flex gap-2">
            <div>
              <div className="text-gray-400 font-bold">Check-in</div>
              <div>
                <input
                  type="date"
                  className="text-teal-400 border-none focus:ring-0"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <div className="text-gray-400 font-bold">Check-out</div>
              <div>
                <input
                  type="date"
                  className="text-teal-400 border-none focus:ring-0"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-300 w-3"></div>
        <div className="w-full px-5 py-2">
          <div className="w-full">
            <div className="text-gray-400 font-bold">Guests and rooms</div>
            <div>
              <select className="text-teal-400 w-full border-none focus:ring-0">
                <option>2 Guests , 1 Room</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-[#5aa389] text-white rounded px-4 py-2 flex gap-2">
          <div>Search hotels</div>
          <div className="text-white pt-1">
            <AiOutlineArrowRight />
          </div>
        </button>
      </div>
    </div>
  );
}
