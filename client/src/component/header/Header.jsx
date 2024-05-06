import Logo from "../logo/Logo";
import { GrSearch } from "react-icons/gr";
import { IoCart } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="shadow-md bg-white py-3">
        <div className="container mx-auto flex justify-between items-center">
          <div className="logo">
            <Logo w="120px" h="auto" />
          </div>

          <div className="search hidden sm:block">
            <div className="flex justify-between items-center w-[400px] border rounded-full ">
              <input
                className="rounded-full w-[85%] outline-none py-1 px-3 "
                type="text"
                placeholder="Search product hare..."
              />
              <div className="cursor-pointer w-[15%] flex justify-center bg-red-600 hover:bg-red-700 transition-all py-2 px-3 rounded-e-full ">
                <GrSearch className="text-white text-xl" />
              </div>
            </div>
          </div>

          <div className="nav flex gap-2 sm:gap-7">
            <div className="text-3xl">
              <FaRegUserCircle />
            </div>
            <div className="text-3xl relative">
              <IoCart />
              <span className="text-xs  bg-red-600 text-white absolute -right-1 -top-0 p-1 py-0 rounded-full">
                0
              </span>
            </div>
            <Link
              to="/login"
              className="text-lg bg-red-600  hover:bg-red-700 transition-all text-white px-3 rounded-full"
            >
              <button>Login</button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
