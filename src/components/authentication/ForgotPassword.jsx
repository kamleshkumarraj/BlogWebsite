import { Link } from "react-router-dom";
import { useState } from "react";
import forgotImage from "../../assets/Images/forgot-password.svg";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
import InputField from "./InputField";
import { getApiResponse } from "../../store/slices/apiResonseHandler.slice";
import { apiCalling } from "../../api/apiCalling.api";


function ForgotPassword() {
  const [formData, setFormData] = useState({
    email: "",
  });
  const dispatch = useDispatch();
  const apiResponse = useSelector(getApiResponse);
  const handleForgotPass = async (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      url: "http://localhost:5000/api/v1/auth/forgot-password",
      formData,
    };
    const data = await dispatch(apiCalling(options));
    if (data.success) {
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
  };
  return (
    <div
      id="forgot"
     
    >
      <div
        className="grid w-full h-[100vh] place-content-center"
      >
        <div id="login-page" className="grid grid-cols-2 gap-[5rem]">
          <div id="img">
            <img src={forgotImage} alt="login-image" />
          </div>
          <div 
            className="max-w-[50rem] my-auto p-[2rem] mx-auto border-[1px] border-[#272626b2]"
            style={{
              backgroundColor: `rgba(255,255,255,0.1)`,
              backdropFilter: `blur(1px)`,
              borderRadius: "10px",
            }}
          >
            <h4
              className=" text-[2.4rem]  space-y-[2rem]"
              style={{ fontWeight: "400" }}
            >
              Forgot Password ?
            </h4>
            <p className="text-[1.6rem] font-[600] my-[.8rem] px-[.5rem]">
              We will send password reset link on your entered email address.
            </p>
            <form
              onSubmit={handleForgotPass}
              action=""
              className="w-full flex flex-col gap-[1.5rem]  mt-[1rem] justify-center"
            >
              <InputField
                placeholder={"Enter your email*"}
                name={"email"}
                value={formData.email}
                setValue={setFormData}
                type={"email"}
              />
              <button
                variant="contained"
                type="submit"
                className="w-full py-[1.5rem] rounded-[.5rem]"
                style={{
                  fontSize: "1.7rem",
                  background: `linear-gradient(45deg , #5468FF ,#59C3FF)`,
                  ":hover": {
                    background: `linear-gradient(45deg , #59C3FF ,#5468FF)`,
                  },
                }}
              >
                {apiResponse?.apiStatus === true ? "Sending..." : "Send Email"}
                {apiResponse?.apiStatus && (
                  <div className="absolute left-[65%] loader"></div>
                )}
              </button>

              <p className="font-[600] text-[2rem] text-center">OR,</p>
              <Link
                to="/login"
                className="text-[2rem] font-[600] text-center"
              >
                {`Already remember password?`}
                <span className="hover:text-[#0077B6] text-[green]">
                  {" "}
                  Login Now
                </span>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
