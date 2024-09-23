
import { Link } from "react-router-dom";
import { useState } from "react";
import registerImage from '../../assets/Images/signin-img.svg'
import { useDispatch, useSelector } from "react-redux";
import profilePhoto from '../../assets/Images/profile-photo.png'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Avatar from 'react-avatar'
import InputField from "./InputField";
import { apiCalling } from "../../api/apiCalling.api";
import { getApiResponse } from "../../store/slices/apiResonseHandler.slice";
import { FaCamera } from "react-icons/fa";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formDataLocal, setFormDataLocal] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    avatar: "",
  });

  const formData = new FormData();

  Object.entries(formDataLocal).forEach(([key, value]) => {
    formData.append(key, value);
  });

  const [previewImage, setPreviewImage] = useState(profilePhoto);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      url: "http://localhost:5000/api/v1/auth/register",
      method: "POST",
      formData,
      contentType: "multipart/form-data",
    };
    const data = await dispatch(apiCalling(options));

    if (data.success) {
      toast.success(data.message);
      navigate("/login");
    } else {
      toast.error(data.message);
    }
  };
  const [errorConfig, setErrorConfig] = useState({
    imageErrror: "",
  });
  const ValidateImage = (preview) => {
    if (preview && preview.type.startsWith("image/")) {
      setErrorConfig((prev) => ({ ...prev, imageErrror: "" }));
      return true;
    } else {
      setErrorConfig((prev) => ({
        ...prev,
        imageErrror: "**Please upload a valid file.",
      }));
      return false;
    }
  };
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (ValidateImage(file)) setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
      setFormDataLocal((prev) => ({ ...prev, avatar: e.target.files[0] }));
    }
  };

  const apiResponse = useSelector(getApiResponse);
  console.log(apiResponse);
  return (
    <div id="register-page"  >
      <div className="grid w-full min-h-[100vh] place-content-center px-[4rem] ">
        <div
          id="register-page"
          className="grid lg:grid-cols-2 grid-cols-1 gap-[5rem] place-content-center w-full"
        >
          <div id="img" className="hidden my-auto lg:block">
            <img src={registerImage} alt="register-image" />
          </div>
            <div id="form" className="border-[1px] border-[#3a393988] p-[2rem] rounded-[1rem] w-full">
            <h4
              className=" text-[2.8rem]  space-y-[2rem]"
              style={{ fontWeight: "400" }}
            >
              Welcome Users!
            </h4>
            <form
              method="post"
              encType="multipart/form-data"
              action="http://localhost:5000/api/v1/auth/register"
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-[2rem] mt-[1rem] justify-center"
            >
              <div
                id="avtar-field"
                className="flex gap-[.5rem] flex-col justify-center rounded-full"
              >
                <label
                  htmlFor="file"
                  className="relative mx-auto hover:cursor-pointer"
                >
                <div id="img" className="w-[20rem] h-[20rem] rounded-full">
                  <img
                  src={previewImage}
                  round = 'full'
                  className="rounded-full w-[100%] h-[100%]"
                  
                  alt="profile-photo"
                />
                </div>
                  
                  <FaCamera
                    size={'2rem'}
                    className={
                      previewImage === "/src/assets/profile-photo.png"
                        ? "absolute top-[0%] left-[62%] "
                        : "hidden"
                    }
                  />
                </label>

                <input
                  onInput={handleImage}
                  id="file"
                  className="hidden"
                  type="file"
                  name="avatar"
                />
                <p
                  id="img-error"
                  className="font-[600] text-[1.6rem] text-[red] text-center my-[.5rem]"
                >
                  {errorConfig.imageErrror}
                </p>
              </div>
              <InputField
                placeholder={"Enter your firstname*"}
                name={"firstname"}
                value={formDataLocal.firstname}
                setValue={setFormDataLocal}
                type={"text"}
              />
              <InputField
                placeholder={"Enter your middlename"}
                name={"middlename"}
                value={formDataLocal.middlename}
                setValue={setFormDataLocal}
                type={"text"}
              />
              <InputField
                placeholder={"Enter your lastname*"}
                name={"lastname"}
                value={formDataLocal.lastname}
                setValue={setFormDataLocal}
                type={"text"}
              />
              <InputField
                placeholder={"Enter your username*"}
                name={"username"}
                value={formDataLocal.username}
                setValue={setFormDataLocal}
                type={"text"}
                Note={"Username must be unique!"}
              />
              <InputField
                placeholder={"Enter your email*"}
                name={"email"}
                value={formDataLocal.email}
                setValue={setFormDataLocal}
                type={"email"}
              />
              <InputField
                placeholder={"Enter your password*"}
                name={"password"}
                value={formDataLocal.password}
                setValue={setFormDataLocal}
                type={"password"}
              />
              <InputField
                placeholder={"Enter your confirm password*"}
                name={"confirmPassword"}
                value={formDataLocal.confirmPassword}
                setValue={setFormDataLocal}
                type={"password"}
              />

              <button
                id="button"
                variant="contained"
                type="submit"
                className="w-full py-[1.5rem] rounded-[.7rem]"
                style={{
                  fontSize: "2rem",
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
              <p className="font-[600] text-[2rem] py-[.2rem] text-center ">
                OR,
              </p>
              <Link
                to="/login"
                className="text-[2rem] font-[600] text-center "
              >
                Already have an account?
                <span className="hover:text-[#b703ee] text-[#b5f005]">
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

export default Register;
