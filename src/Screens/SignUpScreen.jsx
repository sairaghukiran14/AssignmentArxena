import React from "react";
import "../ScreenStyles/SignUpScreen.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import company_icon from "../Assets/arxena-logo.png";
import ProfileBar from "../Utilities/ProfileBar";
import { Link } from "react-router-dom";
const SignUpScreen = () => {
  return (
    <div className="signupscreen_page flex justify-between w-full">
      <div className="signupscreen_page_form_content flex flex-col w-[70%] p-6 ">
        <div className="signupscreen_page_logo w-36 ">
          <Link to={"/"}>
            <img src={company_icon} alt="" className="object-cover" />
          </Link>
        </div>
        <div className="signupscreen_form w-full flex justify-center rounded mt-5">
          <div className="form w-[60%] p-4">
            <form
              action=""
              className="rounded-lg flex flex-col justify-center items-center gap-5"
            >
              <h2 className="text-center text-xl p-4 font-light">
                Get started with 10 free org-chart credits. <br /> No credit
                card is needed.
              </h2>
              <input
                type="text"
                placeholder="Full Name"
                className="border rounded-lg p-2 w-[80%]"
              />
              <input
                type="text"
                placeholder="Full Name"
                className="border rounded-lg p-2 w-[80%]"
              />
              <div className="tel w-[80%] border rounded-lg">
                <PhoneInput
                  country="in"
                  inputStyle={{
                    border: "none",
                    width: "100%",
                  }}
                />
              </div>
              <input
                type="email"
                placeholder="Business Email"
                className="border rounded-lg p-2 w-[80%]"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="border rounded-lg p-2 w-[80%]"
              />
              <div className="selection text-center border rounded-lg p-2 w-[80%]">
                <select placeholder="I work for a">
                  <option value="I Work for a ">I work for a</option>
                  <option value="">Recruitment Agency</option>
                  <option value="">Corporate</option>
                </select>
              </div>
              <button className="py-2 px-10 text-lg font-semibold bg-bluenew rounded-3xl text-white font-sourceSansPro">
                Create account
              </button>
            </form>
            <div className="form_footer opacity-50 text-center flex flex-col gap-3 mt-3">
              <h2>
                Already Registered ?{" "}
                <Link to={"/login"}>
                  <span className="text-bluenew font-semibold">
                    Log in Instead
                  </span>
                </Link>
              </h2>
              <h3>
                Account lock: We discourage licence sharing. Your account will
                be accessible from this device only
              </h3>
            </div>
          </div>
        </div>
      </div>
      <ProfileBar />
    </div>
  );
};

export default SignUpScreen;
