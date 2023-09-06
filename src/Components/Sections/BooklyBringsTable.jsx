import React from "react";
import { BooklyBringsTableData } from "../../Data/BooklyBringsTableData";
import Vector243 from "../../assets/booklimages/Vector243.png";

export default function BooklyBringsTable() {
  return (
    <div className="mb-9">
      <div className="px-[100px]">
        <div className="flex justify-between">
          <div>
            <div className="text-[#31ac9e] text-[22px]">
              <b>What Bookly brings to the table</b>
            </div>
            <div className="mb-5">
              <img className="w-[230px]" src={Vector243} alt="" />
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-4 gap-2 justify-center">
          {BooklyBringsTableData.map((item) => {
            return (
              <div className="bg-white rounded border px-3 py-3">
                <div className="bg-[#31ac9e] w-9 px-3 text-white py-1 rounded">
                  {item.photo}
                </div>
                <div className="  mt-1">
                  <div className="mb-1 text-[12px] font-bold">
                    {item.HotelName}
                  </div>
                  <div className="flex gap-2">
                    <div className="text-[10px] pt-[2px]">{item.rate}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
