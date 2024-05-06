import { useState } from "react";
import signinAvatar from "../../assets/signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import imageTobase64 from "../../helpers/imageToBase64";

const Registration = () => {
  const [showPass, setShowPass] = useState(false);
  const [confirmShowPass, setConfirmShowPass] = useState(false);

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
    profilePhoto: "",
  });

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    const profilePic = await imageTobase64(file);
    console.log(profilePic);

    setInput((prevState) => ({
      ...prevState,
      profilePhoto: profilePic,
    }));
  };

  //Input Change Handler
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //Handle Input Submit
  const handleInputSubmit = (e) => {
    e.preventDefault();

    if (!input.name || !input.email || !input.password || !input.confirmPass) {
      return toast.error("All field are required");
    }

    if (input.password != input.confirmPass) {
      return toast.error("Password not match");
    }

    toast.success("Account created");

    setInput({
      name: "",
      email: "",
      password: "",
      confirmPass: "",
      profilePhoto: "",
    });
  };

  console.log(input.profilePhoto);

  return (
    <>
      <section>
        <div className="login w-96 mx-auto bg-white my-5 shadow-sm p-5 rounded">
          <div className="reg-avatar relative">
            <img
              className="mx-auto rounded-full w-28"
              src={input.profilePhoto ? input.profilePhoto : signinAvatar}
              alt=""
            />
            <label className="absolute bottom-0 right-[7.2rem] bg-[#d1d1d1d6] cursor-pointer pb-6 pt-2 rounded-b-full px-2">
              Upload Photo
              <input
                type="file"
                className="hidden"
                name="profilePhoto"
                onChange={handleFileChange}
              />
            </label>
          </div>

          {/* Reg Form  */}
          <div className="reg-form py-5">
            <form onSubmit={handleInputSubmit} className="flex flex-col gap-2">
              <label className="flex flex-col gap-1">
                Name:
                <div className="bg-[#f1f5f9] p-2">
                  <input
                    name="name"
                    value={input.name}
                    onChange={handleInputChange}
                    className="w-[100%] outline-none bg-transparent"
                    placeholder="Enter Name"
                    type="text"
                  />
                </div>
              </label>
              <label className="flex flex-col gap-1">
                Email:
                <div className="bg-[#f1f5f9] p-2">
                  <input
                    name="email"
                    value={input.email}
                    onChange={handleInputChange}
                    className="w-[100%] outline-none bg-transparent"
                    placeholder="Enter email"
                    type="text"
                  />
                </div>
              </label>
              <label className="flex flex-col gap-1">
                Password:
                <div className="bg-[#f1f5f9] p-2 flex">
                  <input
                    name="password"
                    value={input.password}
                    onChange={handleInputChange}
                    className="w-[100%] outline-none bg-transparent"
                    placeholder="Enter password"
                    type={showPass ? "tex" : "password"}
                  />
                  <div
                    className="cursor-pointer"
                    onClick={() => setShowPass((prevState) => !prevState)}
                  >
                    {showPass ? (
                      <FaEyeSlash className="w-5 h-5" />
                    ) : (
                      <FaEye className="w-5 h-5" />
                    )}
                  </div>
                </div>
              </label>
              <label className="flex flex-col gap-1">
                Confirm password:
                <div className="bg-[#f1f5f9] p-2 flex">
                  <input
                    name="confirmPass"
                    value={input.confirmPass}
                    onChange={handleInputChange}
                    className="w-[100%] outline-none bg-transparent"
                    placeholder="Enter password"
                    type={confirmShowPass ? "tex" : "password"}
                  />
                  <div
                    className="cursor-pointer"
                    onClick={() =>
                      setConfirmShowPass((prevState) => !prevState)
                    }
                  >
                    {confirmShowPass ? (
                      <FaEyeSlash className="w-5 h-5" />
                    ) : (
                      <FaEye className="w-5 h-5" />
                    )}
                  </div>
                </div>
              </label>

              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 mt-3 py-2 w-40 text-white rounded-3xl mx-auto"
              >
                Sign up
              </button>
            </form>
            <div className="pt-2">
              Alrady have account?
              <Link to="/login" className="hover:text-red-600 hover:underline">
                {" "}
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
