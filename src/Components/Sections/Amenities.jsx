import React from "react";
import { AmenitiesData } from "../../Data/AmenitiesData";
import { AmenitiesNewData } from "../../Data/AmenitiesNewData";
import map from "../../assets/booklimages/images/map.png";
import RecommendedHotel from "./RecommendedHotel";

export default function Amenities() {
  return (
    <div>
      <div className="mt-2 text-[23px] font-bold text-[#04a189]">Amenities</div>
      <div className=" flex gap-5 mt-4 ">
        {AmenitiesData.map((item) => {
          return (
            <div className="space-y-1 bg-[#f0f1f2] w-[200px] text-center py-5">
              <div className="px-14">{item.icons}</div>
              <div>{item.name}</div>
            </div>
          );
        })}
      </div>
      <div className="mt-6 w-full">
        {AmenitiesNewData.map((item) => {
          return (
            <table className="flex justify-between w-full">
              <tr className="w-full">
                <td className="w-[300px] pr-24">{item.name}</td>
                <td>{item.icons}</td>
                <td className="w-[200px] text-[12px]">{item.subaname}</td>
                <td>{item.icons}</td>
                <td className="w-[200px] text-[12px]">{item.subaname1}</td>
                <td>{item.icons}</td>
                <td className="text-[12px]">{item.subaname2}</td>
                <div className="h-[1px] bg-gray-300 w-full my-4"></div>
              </tr>
            </table>
          );
        })}
      </div>
      <div className="my-14">
        <img src={map} alt="" />
      </div>
      <RecommendedHotel />
    </div>
  );
}
