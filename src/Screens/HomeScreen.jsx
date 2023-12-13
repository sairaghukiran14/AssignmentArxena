import React, { useState } from "react";
import facebook_icon from "../Assets/facebook.svg";
import linkedin_icon from "../Assets/linkedin.svg";
import twitter_icon from "../Assets/twitter.svg";
import youtube_icon from "../Assets/youtube.svg";
import upload_icon from "../Assets/upload.png";
import company_icon from "../Assets/arxena-logo.png";
import openai_icon from "../Assets/openai_icon.svg";
import loading_icon from "../Assets/new_loading2.gif";
import { Link } from "react-router-dom";
const HomeScreen = () => {
  const [loader, setLoader] = useState(false);
  return (
    <div className="homescreen_page p-4 w-full h-full">
      <div className="homescreen_page_content rounded-lg">
        <div className="homepage_nav flex justify-end gap-2 items-center">
          <Link to={"/signup"}>
            <button className="py-2 px-10 text-lg font-semibold bg-bluenew rounded-3xl text-white font-sourceSansPro">
              Sign up
            </button>
          </Link>
          <Link to={"/login"}>
            <button className=" border font-semibold border-bluenew  text-bluenew rounded-3xl py-2 px-10 text-lg">
              Log in
            </button>
          </Link>
        </div>
        <div className="homepage_main_content flex flex-col justify-center items-center">
          <div className="homepage_main_content_logo_input flex flex-col justify-center items-center w-full mb-28">
            <div className="homepage_main_content_logo w-56 h-56 ">
              <img src={company_icon} alt="" className="object-cover mt-20" />
            </div>

            <div className="homepage_main_content_input_field w-[45%] p-4  border rounded-3xl flex items-center bg-slate-100 h-12 ">
              <input
                type="text"
                placeholder="🔍  Search any company org chart"
                className="outline-none w-full text-sm ml-2 bg-slate-100"
                onInput={(e) => {
                  setLoader(true);
                }}
                onBlur={(e) => {
                  setLoader(false);
                }}
              />
              {loader ? (
                <img
                  src={loading_icon}
                  alt=""
                  className="w-8 h-8 mr-2 bg-slate-100"
                />
              ) : (
                <img
                  src={upload_icon}
                  alt=""
                  className="w-8 h-8 mr-2 bg-slate-100"
                />
              )}
            </div>
          </div>
          <div className="homepage_main_content_info flex justify-center items-center mt-3 mb-40 ">
            <div className="homepage_main_content_box bg-green-200 flex font-medium border-green-400 border items-center justify-center py-1 px-4 rounded-3xl opacity-70 text-xs">
              <img src={openai_icon} alt="" className="w-5 h-5" />
              <span>Powered by OpenAI GPT-4</span>
            </div>
          </div>
        </div>
        <div className="homepage_footer flex justify-between items-center p-4 mt-16 ">
          <div className="homepage_footer_info">
            <h3 className="text-xl font-medium">
              OrgGPT - Talent Identification Software for Ambitious Companies
            </h3>
            <ul className="flex gap-2 p-1 text-sm text-bluenew font-medium">
              <Link to={"/pricing"}>
                <li>Pricing</li>
              </Link>
              <Link to={"/eula"}>
                <li className="border-l-2 pl-2">Terms of Service</li>
              </Link>
              <Link to={"/privacy"}>
                <li className="border-l-2 pl-2">Privacy Policy</li>
              </Link>
              <li className="border-l-2 pl-2">How to Use</li>
              <li className="border-l-2 pl-2">Download Extension</li>
            </ul>
          </div>
          <div className="homepage_social_icons flex gap-6">
            <a href="https://www.linkedin.com/company/arxena/about/https://www.linkedin.com/company/arxena/about/">
              <img src={linkedin_icon} alt="" className="w-12" />
            </a>
            <a href="https://twitter.com/arxenainc">
              <img src={twitter_icon} alt="" className="w-12" />
            </a>

            <a href="https://www.facebook.com/arxenainc">
              <img src={facebook_icon} alt="" className="w-12" />
            </a>

            <a href="https://www.youtube.com/channel/UCpaPM7iFg9D309FUaIVeRpA">
              <img src={youtube_icon} alt="" className="w-12" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
