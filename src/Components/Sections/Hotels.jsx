import React from "react";
import bedroom from "../../assets/booklimages/images/hotel_bedroom.jpg";
import dining from "../../assets/booklimages/images/hotel_dining room.jpg";
import weddingroom from "../../assets/booklimages/images/hotel_bedroom.jpg";
import garden from "../../assets/booklimages/images/hotel_gym.jpg";
import swimmingpool from "../../assets/booklimages/images/hotel_swimming_pool.jpeg";
import HotelSelection from "./HotelSelection";

export default function Hotels() {
  return (
    <div>
      <div className="flex gap-1 w-full px-[360px] pb-12">
        <div className="w-full ">
          <img className="rounded-xl w-full h-[415px]" src={bedroom} alt="" />
        </div>
        <div className="flex gap-1">
          <div className="space-y-1">
            <div className="w-[250px] rounded">
              <img
                className="rounded h-[205px] object-cover"
                src={dining}
                alt=""
              />
            </div>
            <div className="w-[250px] rounded">
              <img
                className="rounded h-[205px] object-cover"
                src={garden}
                alt=""
              />
            </div>
          </div>
          <div className="space-y-1">
            <div className="w-[250px] rounded">
              <img
                className="rounded h-[205px] object-cover"
                src={swimmingpool}
                alt=""
              />
            </div>
            <div className="w-[250px] rounded">
              <img
                className="rounded h-[205px] object-cover"
                src={weddingroom}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <HotelSelection />
    </div>
  );
}
