import React from "react";
import bedroom from "../../assets/booklimages/images/hotel_bedroom.jpg";
import dining from "../../assets/booklimages/images/hotel_dining room.jpg";
import weddingroom from "../../assets/booklimages/images/hotel_bedroom.jpg";
import garden from "../../assets/booklimages/images/hotel_gym.jpg";
import swimmingpool from "../../assets/booklimages/images/hotel_swimming_pool.jpeg";
import Amenities from "./Amenities";

export default function HotelDescription() {
  return (
    <div className="px-[360px] py-[20px]">
      <div className="font-bold text-[24px] pb-3">Hotel Description</div>
      <div className="flex gap-1 w-full pb-12">
        <div className="w-full">
          <img className="rounded h-[185px] w-full " src={bedroom} alt="" />
        </div>
        <div className="flex gap-1">
          <div className="space-y-1">
            <div className="w-full rounded">
              <img
                className="rounded h-[90px] w-full object-cover"
                src={dining}
                alt=""
              />
            </div>
            <div className="flex gap-1">
              <div>
                <img
                  className="rounded w-[300px] h-[90px] object-cover"
                  src={garden}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="rounded w-[300px] h-[90px] object-cover"
                  src={garden}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="space-y-1">
            <div className="w-[130px] rounded">
              <img
                className="rounded h-[90px] object-cover"
                src={swimmingpool}
                alt=""
              />
            </div>
            <div className="w-[130px] rounded">
              <img
                className="rounded h-[90px] object-cover"
                src={weddingroom}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="font-bold text-[20px] pb-3">Ubumwe Grand Hotel</div>
        <div className="text-[10px] pb-1">
          Set in Rwanda features a terrace, restaurant, bar, and free WiFi
          throughout the property.
        </div>
        <div className="text-[10px] pb-1">
          The property is around 2.5 km from Opéra Bastille, 2 km from
          Paris-Gare-de-Lyon and 4.5 km from Notre Dame Cathedral.
        </div>
      </div>
      <Amenities />
    </div>
  );
}
