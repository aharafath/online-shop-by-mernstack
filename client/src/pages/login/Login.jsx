import { useState } from "react";
import signinAvatar from "../../assets/signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

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

    if (!input.email || !input.password) {
      return toast.error("All field are required");
    }

    toast.success("You are loged in");
    setInput({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <section>
        <div className="login w-96 mx-auto bg-white my-5 shadow-sm p-5 rounded">
          <div className="login-avatar">
            <img
              className="mx-auto rounded-full w-28"
              src={signinAvatar}
              alt=""
            />
          </div>

          {/* Login Form  */}
          <div className="login-form py-5">
            <form onSubmit={handleInputSubmit} className="flex flex-col gap-2">
              <label className="flex flex-col gap-1">
                Email:
                <div className="bg-[#f1f5f9] p-2">
                  <input
                    name="email"
                    value={input.email}
                    onChange={handleInputChange}
                    className="w-[100%] outline-none bg-transparent"
                    placeholder="Enter email"
                    type="email"
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
              <div className="forgot-pass text-right hover:underline hover:text-red-600">
                <Link to="/forgot-password">Forgot password</Link>
              </div>

              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 mt-3 py-2 w-40 text-white rounded-3xl mx-auto"
              >
                Sign in
              </button>
            </form>
            <div className="pt-2">
              Don't have account?
              <Link
                to="/registration"
                className="hover:text-red-600 hover:underline"
              >
                {" "}
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
