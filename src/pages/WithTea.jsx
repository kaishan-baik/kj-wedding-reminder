import React from "react";
import ItineraryWithTea from "../components/ItineraryWithTea";
import Logo from "./../images/logo1.png";
import { BiSolidParty } from "react-icons/bi";

// import Footer from "./../components/Footer";

const WithTea = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full text-center my-4 font-serif">
      <div className="card bg-yellow-50 w-4/5 p-4">
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
        <div className="flex flex-col p-5 bg-yellow-100 text-slate-800 sm:w-4/5 sm:mx-auto sm:px-24">
          <div className="py-2">
            <h3 className="celebrate capitalize my-2 text-2xl font-bold text-red-500 border-b-2 border-red-500 sm:text-3xl flex items-center justify-center">
              <BiSolidParty />
              let's celebrate!
            </h3>
            <div>
              <p className="tracking-wide text-center py-2 ">
                To our family and friends, we are delighted to share our
                momentous occasion with you. It will be our pleasure to have you
                celebrate and be a part of our Wedding Day. Kindly find all the
                details related to our wedding here.
              </p>
              <ul className="my-2">
                <li className="my-2">
                  <span className="font-semibold">Date: </span>
                  18th November 2023 (Saturday)
                </li>
                <li className="my-2">
                  <span className="font-semibold">Time: </span>
                  6.00pm Cocktail & Photoshoot Session | 7.00pm Dinner Reception
                </li>
                <li className="m-2">
                  <span className="font-semibold">Venue: </span>
                  Noble Mansion, P1-01, Level 1 Podium, Plaza 33, Jalan
                  Kemajuan, Seksyen 13, 46200 Petaling Jaya, Selangor
                </li>
                <li className="my-2">
                  <span className="font-semibold">Dress Code: </span>
                  Formal
                </li>
              </ul>
              <p>
                We look forward to be seeing all of you on this prosperous day!
              </p>
            </div>
          </div>
          <div lang="zh-CN" className="py-2">
            <h3 className="celebrate capitalize my-2 text-2xl font-bold text-red-500 border-b-2 border-red-500  flex  justify-center">
              <BiSolidParty />
              欢迎 !
            </h3>
            <div>
              <p className="tracking-wide text-center py-2 ">
                亲爱的家人和朋友们，我们很高兴与您分享我们的重要时刻。
                我们很高兴您能庆祝并成为我们婚礼的一部分。
                请在这里找到与我们婚礼相关的所有详细信息:
              </p>
              <ul className="my-2">
                <li className="my-2">
                  <span className="font-semibold">日期：</span>
                  2023年 11月18日 (星期六)
                </li>
                <li className="my-2">
                  <span className="font-semibold">时间：</span>
                  傍晚 6.00 迎宾酒会 | 傍晚 7.00 晚宴
                </li>
                <li className="my-2">
                  <span className="font-semibold">地点：</span>
                  Level 1 八打灵再也 大陽城酒家
                </li>
                <li className="my-2">
                  <span className="font-semibold">着装：</span>
                  正装
                </li>
              </ul>
              <p>我们期待在这个繁荣的日子里与大家见面!</p>
            </div>
          </div>
        </div>

        <ItineraryWithTea />
      </div>
    </div>
  );
};

export default WithTea;
