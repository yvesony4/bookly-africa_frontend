import React from "react";
import visaLogo from "../../assets/booklimages/images/Visa_Inc._logo.png";
import mastercardLogo from "../../assets/booklimages/images/mastercard_icon.png";
import discoverLogo from "../../assets/booklimages/images/discover.png";
import westernUnionLogo from "../../assets/booklimages/images/western_union.png";
import usaLogo from "../../assets/usa.png";
import { RxTriangleDown } from "react-icons/rx";

var currentYear = new Date().getFullYear();

function FooterImages(props) {
  return (
    <img
      className="py-[3px] mr-3"
      src={props.name}
      alt={props.alt}
      width={40}
      height={40}
    />
  );
}

export default function Copyright() {
  return (
    <div className="px-[100px] mt-3 py-[3px] bg-white w-full flex fixed bottom-0 left-0">
      <div className="py-[2px] mr-40">
        Copyright ©{currentYear} by Bookly Africa
      </div>
      <div className="flex items-center">
        <FooterImages name={visaLogo} alt="Visa Card logo" />
        <FooterImages name={mastercardLogo} alt="Mastercard logo" />
        <FooterImages name={discoverLogo} alt="Discover logo" />
        <FooterImages name={westernUnionLogo} alt="Western Union logo" />
        <div className="py-[7px]">
          <img className="h-[15px]" src={usaLogo} alt="USA logo" />
        </div>
        <div className="mr-3">
          <RxTriangleDown />
        </div>
        <div>
          <b>USD</b>
        </div>
        <div>
          <RxTriangleDown />
        </div>
      </div>
    </div>
  );
}
