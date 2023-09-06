import React, { useState } from "react";
import bedroom from "../../assets/booklimages/images/hotel_bedroom.jpg";
import dining from "../../assets/booklimages/images/hotel_dining room.jpg";
import weddingroom from "../../assets/booklimages/images/hotel_bedroom.jpg";
import garden from "../../assets/booklimages/images/hotel_gym.jpg";
import swimmingpool from "../../assets/booklimages/images/hotel_swimming_pool.jpeg";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { AiFillStar } from "react-icons/ai";
import { IoIosBicycle } from "react-icons/io";
import { CiMapPin } from "react-icons/ci";
import { FaPoundSign } from "react-icons/fa";

const SectionNavigationTopHotel = () => {
  const images = [
    {
      start: (
        <div className="flex mt-3">
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
        </div>
      ),
      rate: (
        <div className="flex gap-2 py-3">
          <div className="text-[18px] font-bold">4.4</div>
          <div className="mt-2">
            <div className="flex gap-1 pt-[1px]">
              <div>
                <IoIosBicycle className="text-[10px] mt-[-2px]" />
              </div>
              <div className="bg-[#00aa6c] rounded-full w-2 h-2"></div>
              <div className="bg-[#00aa6c] rounded-full w-2 h-2"></div>
              <div className="bg-[#00aa6c] rounded-full w-2 h-2"></div>
              <div className="bg-[#00aa6c] rounded-full w-2 h-2"></div>
              <div className="flex">
                <div className="bg-[#00aa6c] rounded-l-full w-[4px] h-2"></div>
                <div className="border border-[#00aa6c] rounded-r-full w-[4px] h-2"></div>
              </div>
            </div>
          </div>
          <div className="text-[10px] pt-[5px]">100 Reviews</div>
        </div>
      ),
      name: "Hotel Paris Bastille Boutet - MGa",
      miles: "1.60",
      amount: "358",
      photo: weddingroom,
    },
    {
      start: (
        <div className="flex mt-3">
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
        </div>
      ),
      rate: (
        <div className="flex gap-2 py-3">
          <div className="text-[18px] font-bold">4.4</div>
          <div className="mt-2">
            <div className="flex gap-1 pt-[1px]">
              <div>
                <IoIosBicycle className="text-[10px] mt-[-2px]" />
              </div>
              <div className="bg-[#00aa6c] rounded-full w-2 h-2"></div>
              <div className="bg-[#00aa6c] rounded-full w-2 h-2"></div>
              <div className="bg-[#00aa6c] rounded-full w-2 h-2"></div>
              <div className="bg-[#00aa6c] rounded-full w-2 h-2"></div>
              <div className="flex">
                <div className="bg-[#00aa6c] rounded-l-full w-[4px] h-2"></div>
                <div className="border border-[#00aa6c] rounded-r-full w-[4px] h-2"></div>
              </div>
            </div>
          </div>
          <div className="text-[10px] pt-[5px]">100 Reviews</div>
        </div>
      ),
      name: "Maison Breguet",
      miles: "1.60",
      amount: "256",
      photo: garden,
    },
    {
      start: (
        <div className="flex mt-3">
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
        </div>
      ),
      rate: (
        <div className="flex gap-2 py-3">
          <div className="text-[18px] font-bold">4.4</div>
          <div className="mt-2">
            <div className="flex gap-1 pt-[1px]">
              <div>
                <IoIosBicycle className="text-[10px] mt-[-2px]" />
              </div>
              <div className="bg-[#00aa6c] rounded-full w-2 h-2"></div>
              <div className="bg-[#00aa6c] rounded-full w-2 h-2"></div>
              <div className="bg-[#00aa6c] rounded-full w-2 h-2"></div>
              <div className="bg-[#00aa6c] rounded-full w-2 h-2"></div>
              <div className="flex">
                <div className="bg-[#00aa6c] rounded-l-full w-[4px] h-2"></div>
                <div className="border border-[#00aa6c] rounded-r-full w-[4px] h-2"></div>
              </div>
            </div>
          </div>
          <div className="text-[10px] pt-[5px]">100 Reviews</div>
        </div>
      ),
      name: "Maison Breguet",
      miles: "1.60",
      amount: "430",
      photo: dining,
    },
    {
      start: (
        <div className="flex mt-3">
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
        </div>
      ),
      rate: (
        <div className="flex gap-2 py-3">
          <div className="text-[18px] font-bold">4.4</div>
          <div className="mt-2">
            <div className="flex gap-1 pt-[1px]">
              <div>
                <IoIosBicycle className="text-[10px] mt-[-2px]" />
              </div>
              <div className="bg-[#00aa6c] rounded-full w-2 h-2"></div>
              <div className="bg-[#00aa6c] rounded-full w-2 h-2"></div>
              <div className="bg-[#00aa6c] rounded-full w-2 h-2"></div>
              <div className="bg-[#00aa6c] rounded-full w-2 h-2"></div>
              <div className="flex">
                <div className="bg-[#00aa6c] rounded-l-full w-[4px] h-2"></div>
                <div className="border border-[#00aa6c] rounded-r-full w-[4px] h-2"></div>
              </div>
            </div>
          </div>
          <div className="text-[10px] pt-[5px]">100 Reviews</div>
        </div>
      ),
      name: "Maison Breguet",
      miles: "1.60",
      amount: "123",
      photo: swimmingpool,
    },
    {
      start: (
        <div className="flex mt-3">
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
        </div>
      ),
      rate: (
        <div className="flex gap-3 py-5">
          <div className="text-[23px] font-bold">4.4</div>
          <div className="mt-2">
            <div className="flex gap-1">
              <div>
                <IoIosBicycle className="text-[10px] mt-[-2px]" />
              </div>
              <div className="bg-[#00aa6c] rounded-full w-2 h-2"></div>
              <div className="bg-[#00aa6c] rounded-full w-2 h-2"></div>
              <div className="bg-[#00aa6c] rounded-full w-2 h-2"></div>
              <div className="bg-[#00aa6c] rounded-full w-2 h-2"></div>
              <div className="flex">
                <div className="bg-[#00aa6c] rounded-l-full w-[4px] h-2"></div>
                <div className="border border-[#00aa6c] rounded-r-full w-[4px] h-2"></div>
              </div>
            </div>
          </div>
          <div className="text-[10px]">100 Reviews</div>
        </div>
      ),
      name: "SO / Paris Hotel",
      miles: "1.60",
      amount: "555",
      photo: bedroom,
    },
    {
      start: (
        <div className="flex mt-3">
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
        </div>
      ),
      rate: (
        <div className="flex gap-2 py-3">
          <div className="text-[18px] font-bold">4.4</div>
          <div className="mt-2">
            <div className="flex gap-1 pt-[1px]">
              <div>
                <IoIosBicycle className="text-[10px] mt-[-2px]" />
              </div>
              <div className="bg-[#00aa6c] rounded-full w-2 h-2"></div>
              <div className="bg-[#00aa6c] rounded-full w-2 h-2"></div>
              <div className="bg-[#00aa6c] rounded-full w-2 h-2"></div>
              <div className="bg-[#00aa6c] rounded-full w-2 h-2"></div>
              <div className="flex">
                <div className="bg-[#00aa6c] rounded-l-full w-[4px] h-2"></div>
                <div className="border border-[#00aa6c] rounded-r-full w-[4px] h-2"></div>
              </div>
            </div>
          </div>
          <div className="text-[10px] pt-[5px]">100 Reviews</div>
        </div>
      ),
      name: "SO / Paris Hotel",
      miles: "1.60",
      amount: "778",
      photo: bedroom,
    },
    {
      start: (
        <div className="flex mt-3">
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
        </div>
      ),
      rate: (
        <div className="flex gap-2 py-3">
          <div className="text-[18px] font-bold">4.4</div>
          <div className="mt-2">
            <div className="flex gap-1 pt-[1px]">
              <div>
                <IoIosBicycle className="text-[10px] mt-[-2px]" />
              </div>
              <div className="bg-[#00aa6c] rounded-full w-2 h-2"></div>
              <div className="bg-[#00aa6c] rounded-full w-2 h-2"></div>
              <div className="bg-[#00aa6c] rounded-full w-2 h-2"></div>
              <div className="bg-[#00aa6c] rounded-full w-2 h-2"></div>
              <div className="flex">
                <div className="bg-[#00aa6c] rounded-l-full w-[4px] h-2"></div>
                <div className="border border-[#00aa6c] rounded-r-full w-[4px] h-2"></div>
              </div>
            </div>
          </div>
          <div className="text-[10px] pt-[5px]">100 Reviews</div>
        </div>
      ),
      name: "Maison Breguet",
      miles: "1.60",
      amount: "430",
      photo: dining,
    },

    {
      start: (
        <div className="flex mt-3">
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
        </div>
      ),
      rate: (
        <div className="flex gap-2 py-3">
          <div className="text-[18px] font-bold">4.4</div>
          <div className="mt-2">
            <div className="flex gap-1 pt-[1px]">
              <div>
                <IoIosBicycle className="text-[10px] mt-[-2px]" />
              </div>
              <div className="bg-[#00aa6c] rounded-full w-2 h-2"></div>
              <div className="bg-[#00aa6c] rounded-full w-2 h-2"></div>
              <div className="bg-[#00aa6c] rounded-full w-2 h-2"></div>
              <div className="bg-[#00aa6c] rounded-full w-2 h-2"></div>
              <div className="flex">
                <div className="bg-[#00aa6c] rounded-l-full w-[4px] h-2"></div>
                <div className="border border-[#00aa6c] rounded-r-full w-[4px] h-2"></div>
              </div>
            </div>
          </div>
          <div className="text-[10px] pt-[5px]">100 Reviews</div>
        </div>
      ),
      name: "Maison Breguet",
      miles: "1.60",
      amount: "256",
      photo: garden,
    },

    {
      start: (
        <div className="flex mt-3">
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
          <div>
            <AiFillStar className="text-[#f65c42]" />
          </div>
        </div>
      ),
      rate: (
        <div className="flex gap-2 py-3">
          <div className="text-[18px] font-bold">4.4</div>
          <div className="mt-2">
            <div className="flex gap-1 pt-[1px]">
              <div>
                <IoIosBicycle className="text-[10px] mt-[-2px]" />
              </div>
              <div className="bg-[#00aa6c] rounded-full w-2 h-2"></div>
              <div className="bg-[#00aa6c] rounded-full w-2 h-2"></div>
              <div className="bg-[#00aa6c] rounded-full w-2 h-2"></div>
              <div className="bg-[#00aa6c] rounded-full w-2 h-2"></div>
              <div className="flex">
                <div className="bg-[#00aa6c] rounded-l-full w-[4px] h-2"></div>
                <div className="border border-[#00aa6c] rounded-r-full w-[4px] h-2"></div>
              </div>
            </div>
          </div>
          <div className="text-[10px] pt-[5px]">100 Reviews</div>
        </div>
      ),
      name: "Maison Breguet",
      miles: "1.60",
      amount: "23",
      photo: dining,
    },
  ];
  const [lastImageIndex, setLastImageIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(3);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => prevIndex + 3);
    setLastImageIndex((prevIndex) => prevIndex + 3);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => prevIndex - 3);
    setLastImageIndex((prevIndex) => prevIndex - 3);
  };

  return (
    <div>
      <div className="flex justify-end mb-4">
        <button
          disabled={lastImageIndex === 0}
          className={`px-4 py-2 ${
            lastImageIndex === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500"
          } text-white rounded`}
          onClick={handlePreviousImage}
        >
          <GrPrevious />
        </button>
        <button
          disabled={images.length <= currentImageIndex ? true : false}
          className={`ml-1 px-4 py-2 ${
            images.length <= currentImageIndex
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500"
          } text-white rounded`}
          onClick={handleNextImage}
        >
          <GrNext />
        </button>
      </div>
      <div className="flex items-center gap-4 w-full">
        {images.slice(lastImageIndex, currentImageIndex).map((item, idx) => (
          <div className="h-[50%] flex flex-col gap-2 justify-center w-full">
            <div className="relative  h-[190.08px] w-full ">
              <img
                key={idx}
                src={item.photo}
                alt=""
                className="rounded-t-xl object-cover w-full h-full"
              />
              <span className="text-white text-[17px] absolute bottom-12 left-5">
                {item.start}
              </span>
              <span className="text-white text-[17px] absolute bottom-5 left-5">
                {item.name}
              </span>
            </div>
            <div className="rounded-b-xl shadow">
              <div className="flex px-4 ">
                <div>
                  <CiMapPin />
                </div>
                <div className="text-[10px]">{item.miles} miles from hotel</div>
              </div>
              <div className="flex justify-between px-4 ">
                <div>{item.rate}</div>
                <div>
                  <div className="text-[23px] font-bold flex">
                    <div className="pt-1">
                      <FaPoundSign />
                    </div>
                    <div>{item.amount}</div>
                  </div>
                  <div className="text-[14px] text-gray-500">a night</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionNavigationTopHotel;
