import React from "react";
import "../ScreenStyles/LoginScreen.css";
import company_icon from "../Assets/arxena-logo.png";
import ProfileBar from "../Utilities/ProfileBar";
import { Link } from "react-router-dom";
const LoginScreen = () => {
  return (
    <div className="loginscreen_page flex">
      <div className="loginscreen_page_form_content flex flex-col w-[70%] p-6 ">
        <div className="loginscreen_page_logo w-36 ">
          <Link to={"/"}>
            <img src={company_icon} alt="" className="object-cover" />
          </Link>
        </div>
        <div className="loginscreen_form w-full flex justify-center mt-10 rounded ">
          <div className="form w-[55%] border p-4">
            <form
              action=""
              className="rounded-lg flex flex-col justify-center items-center gap-4 p-4"
            >
              <h2 className="text-center text-xl py-4 ">Welcome back!</h2>
              <input
                type="email"
                placeholder="Email"
                className="border rounded-lg p-2 w-[80%]"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="border rounded-lg p-2 w-[80%]"
              />
              <button className="font-semibold text-white bg-bluenew rounded-3xl py-2 px-10 text-lg mt-4">
                Log in
              </button>
            </form>
            <div className="loginscreen_otherlinks w-full flex flex-col opacity-70 py-3">
              <div className="forgetyourpassword flex justify-center items-center">
                Forgot your password?{" "}
                <Link to={"/resetpassword"}>
                  {" "}
                  <span className="text-bluenew font-semibold">
                    Reset it here
                  </span>
                </Link>
              </div>
              <div className="signuppage flex justify-center items-center">
                Need an account?
                <Link to={"/signup"}>
                  {" "}
                  <span className="text-bluenew font-semibold">
                    Sign up for free
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProfileBar />
    </div>
  );
};

export default LoginScreen;
