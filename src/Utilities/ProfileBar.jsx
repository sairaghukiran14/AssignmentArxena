import React from "react";
import linkedin from "../Assets/linkedin.svg";
import openingquote from "../Assets/quote.png";
import closingquote from "../Assets/quote1.png";
import profile_photo from "../Assets/EnhancedDP1.png";
import "../Utilities/ProfileBar.css";
const ProfileBar = () => {
  return (
    <div className="profilepage_sidebar p-4 w-[33%]">
      <div className="profile flex flex-col justify-center items-center pt-24">
        <img src={profile_photo} alt="" className="rounded-full w-36" />
        <div className="openingquote w-full flex justify-start">
          <img src={openingquote} alt="" className="w-10" />
        </div>
        <div className="profilesaying mt-3 font-medium italic">
          Arxena helps me map with large F100 accounts saving me hours of manual
          work for resourcing projects
        </div>

        <div className="profile_name mt-3">
          <span className="font-semibold">Mannan Pacha</span> | Manager - Ernst
          & Young
        </div>

        <div className="icons">
          <a href="https://www.linkedin.com/company/arxena/about/https://www.linkedin.com/company/arxena/about/">
            <img src={linkedin} alt="" className="w-8" />
          </a>
        </div>
      </div>
      <div className="closingquote w-full flex justify-end">
        <img src={closingquote} alt="" className="w-10" />
      </div>
    </div>
  );
};

export default ProfileBar;
