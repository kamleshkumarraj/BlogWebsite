import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import InputField from "./InputField";
import { getApiResponse } from "../../store/slices/apiResonseHandler.slice";
import { apiCalling } from "../../api/apiCalling.api";
import { setUser } from "../../store/slices/selfHandler.slice";
import loginImg from '../../assets/Images/login-img.svg'
import {useGoogleLogin} from '@react-oauth/google'
import { FcGoogle } from "react-icons/fc";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const apiResponse = useSelector(getApiResponse);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      url: "http://localhost:5000/api/v1/auth/login",
      formData,
      contentType: "application/json",
    };
    const data = await dispatch(apiCalling(options));
    if (data.success) {
      localStorage.setItem("tocken", data.tocken);
      toast.success(data.message);
      dispatch(setUser(data.user));
      navigate("/");
    } else toast.error(data.message);

  };

  //! now we write code for authenticating from googel.
  const responseGoogleLogin = async (authResult) => {
    console.log(`http://localhost:5000/api/v1/auth/login-google?code=${authResult['code']}`)
    console.log(authResult['code'])
    console.log(authResult)
    try {
      if(authResult['code']){
        const options = {
          method: "GET",
          url: `http://localhost:5000/api/v1/auth/login-google?code=${authResult['code']}`,
          contentType: "application/json",
        };
        const data  = await dispatch(apiCalling(options))
        if (data?.success) {
          localStorage.setItem("tocken", data.tocken);
          toast.success(data.message);
          dispatch(setUser(data.user));
          navigate("/");
        } else toast.error(data?.message);
       
      };
      
    }catch(err){
      console.log("Error occur during the authentication process" , err)
    }
  }
  const googleLogin = useGoogleLogin({
    onSuccess :  responseGoogleLogin,
    onError : responseGoogleLogin,
    flow : 'auth-code'
  });
  
  

  return (
    <div
      id="loginContainer"
      className="w-full px-[4rem]"
    >
      <div
        component={"main"}
        className="grid w-full place-content-center"
      >
        <div id="login-page" className="grid lg:grid-cols-2 grid-cols-1 gap-[10rem] bg-[] items-center justify-center ">
          <div id="img" className="hidden lg:block" style={{ backdropFilter: `blur(2px)` }}>
            <img src={loginImg} alt="" />
          </div>
          <div id="form">
            <form
              onSubmit={handleLogin}
              action=""
              style={{boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`}}
              className="w-full flex flex-col gap-[1.5rem]  mt-[1rem] border-[1px] border-[#656363b7] p-[2rem] rounded-[1rem]"
            >
            <h3
              className=" text-[2.4rem]  space-y-[2rem] text-center"
              style={{ fontWeight: "400" }}
            >
             Login
            </h3>
              <InputField
                placeholder={"Enter your email*"}
                name={"email"}
                value={formData.email}
                setValue={setFormData}
                type={"email"}
              />
              <InputField
                placeholder={"Enter your password*"}
                name={"password"}
                value={formData.password}
                setValue={setFormData}
                type={"password"}
              />
              <Link id="forgot-pass" to={"/forgot-password"}>
                <span className="hover:text-[#b703ee] text-[#b5f005] text-[2rem] font-[600]">
                  Forgot password?
                </span>
              </Link>
              <button
                type="submit"
                className="w-full py-[1.6rem] rounded-[.5rem]"
                style={{
                  fontSize: "1.8rem",
                  background: `linear-gradient(45deg , #5468FF ,#59C3FF)`,
                  ":hover": {
                    background: `linear-gradient(45deg , #59C3FF ,#5468FF)`,
                  },
                }}
              >
                {apiResponse?.apiStatus === true ? "Submitting..." : "Submit"}
                {apiResponse?.apiStatus && (
                  <div className="absolute left-[65%] loader"></div>
                )}
              </button>
              <p className="font-[600] text-[1.8rem] text-center">OR,</p>
              <Link
                to="/signin"
                className="text-[1.8rem] font-[600] text-center"
              >
                {`Already haven't an account`}?
                <span className="hover:text-[#b703ee] text-[#b5f005]">
                  {" "}
                  Register Now
                </span>
              </Link>
              <div
                className="w-full my-[2rem] py-[1.5rem] rounded-[.5rem] hover:cursor-pointer text-center flex justify-center items-center gap-[2rem]"
                style={{
                  fontSize: "1.8rem",
                  background: `linear-gradient(45deg , #A4B8FD ,#59C3FF)`,
                  ":hover": {
                    background: `linear-gradient(45deg , #59C3FF ,#5468FF)`,
                  },
                }}
                onClick={googleLogin}
              >
                <FcGoogle size={'3rem'}/>
                <span>
                {apiResponse?.apiStatus === true ? "Submitting..." : "Click for login with Google"}
                </span>
                {apiResponse?.apiStatus && (
                  <div className="absolute left-[65%] loader"></div>
                )}
              </div>
              
            </form>
            
            </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
