import React from "react";
import Logo from "./../images/logo1.png";
import WithTea from "./WithTea";
import WithoutTea from "./WithoutTea";
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full text-center my-4 font-serif">
      <div className="card bg-yellow-50 w-4/5 p-4 ">
        <img
          src={Logo}
          alt="invitation-logo"
          className="w-20 items-center mx-auto sm:w-52 my-6"
        />
        <div className="uppercase">
          <h2 className="text-md tracking-wider font-semibold  ">
            celebrating
          </h2>
          <h1 className="names my-5 capitalize text-xl tracking-widest text-red-800 font-bold sm:text-3xl">
            Kai Jie & Pui Yee
          </h1>
          <p className="text-sm">together with their parents</p>
          <div className="parents grid grid-cols-1 sm:grid-cols-2 capitalize gap-0 text-md text-red-800 font-bold sm:text-2xl sm:py-2">
            <div className="py-2">
              <p>mr. & mrs. baik keang yu</p>
              {/* <p>mrs. khor bee lin</p> */}
            </div>
            <div className="py-2">
              <p>mr. & mrs. loh kong heah</p>
              {/* <p>mrs. loh kong heah</p> */}
            </div>
          </div>
        </div>
        <div className=" my-3 w-4/5 items-center justify-center mx-auto">
          <h1 className="text-md font-bold">
            Will you be joining us for the tea ceremony?
          </h1>
          <div className="grid grid-cols-2 ">
            <button
              className="bg-red-500 px-5 py-2 m-2 text-sm text-yellow-300 font-bold rounded-xl mx-auto"
              to={WithTea}
            >
              Yes
            </button>
            <button
              className="bg-yellow-300 px-5 py-2 m-2 text-sm text-red-500 font-bold rounded-xl mx-auto"
              to={WithoutTea}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
