import React from "react";
import { FaCocktail } from "react-icons/fa";
import { RiCupFill } from "react-icons/ri";
import { MdDinnerDining, MdLocationOn } from "react-icons/md";
const Itinerary = () => {
  return (
    <div className="bg-orange-100 my-2 mt-6 w-full mx-auto sm:w-4/5 p-3 sm:mb-6">
      <div className="text-xl border-b-2 border-red-500 text-center items-center mx-auto my-4 w-2/3 ">
        Itinerary
      </div>
      <div className="flex flex-col items-center justify-center">
        <RiCupFill size={70} className="bg-orange-300 rounded-full p-3" />
        <div className="text-black py-4 capitalize w-4/5 ">
          <p className="my-2 font-bold text-rose-400">Tea ceremony 敬茶礼仪</p>
          <p className="my-2">11.00AM | 上午 11 时正</p>
          <a
            href="https://maps.app.goo.gl/L5dgQe3NYqcN6J2w7"
            className="text-blue-800 underline my-2 "
          >
            1 Lorong Melor 2, Kampung Kayu Ara PJU 6A, Petaling Jaya, Selangor.
          </a>
          <p className="normal-case my-2">
            Please join us for some light food and tea ceremony session!
          </p>
          <iframe
            className="w-full mx-auto mt-5"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8481889117515!2d101.6085767757256!3d3.1347808532392407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4eca3775714d%3A0x9e3d882641a3e01c!2s1%2C%20Lorong%20Melor%202%2C%20Kampung%20Sungai%20Kayu%20Ara%2C%2047400%20Petaling%20Jaya%2C%20Selangor!5e0!3m2!1sen!2smy!4v1695028531407!5m2!1sen!2smy"
            loading="lazy"
            referrerPolicy="no-referrer"
            title="home"
          ></iframe>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <FaCocktail size={70} className="bg-orange-300 rounded-full p-3" />
        <div className="text-black py-4 capitalize w-4/5 ">
          <p className="my-2 font-bold text-rose-400">
            Cocktail & photoshoot session 迎宾酒会
          </p>
          <p className="my-2">6.00PM | 傍晚 6 时正</p>
          <a
            href="https://maps.app.goo.gl/L5dgQe3NYqcN6J2w7"
            className="text-blue-800 underline my-2 "
          >
            Noble Mansion, P1-01, Level 1 Podium, Plaza 33, Jalan Kemajuan,
            Seksyen 13, 46200 Petaling Jaya, Selangor
          </a>
          <p className="normal-case my-2">
            Please join us for some cocktail drinks and photoshoot session!
            There will be light bites and beverage bar available.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <MdDinnerDining size={70} className="bg-orange-300 rounded-full p-3" />
        <div className="text-black py-4 capitalize w-4/5">
          <p className="my-2">Dinner Reception 晚宴</p>
          <p className="my-2">7.00PM | 傍晚 7 时正</p>
          <a
            href="https://maps.app.goo.gl/L5dgQe3NYqcN6J2w7"
            className="text-blue-800 underline my-2 "
          >
            Noble Mansion, P1-01, Level 1 Podium, Plaza 33, Jalan Kemajuan,
            Seksyen 13, 46200 Petaling Jaya, Selangor
          </a>
          <p className="normal-case my-2">
            We'd glad if you could witness our momentous event!
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <MdLocationOn size={70} className="bg-orange-300 rounded-full p-3" />
        <div className="text-black py-4 capitalize w-4/5">
          <p className="my-2">Wedding Venue 婚礼场地</p>
          <a
            href="https://maps.app.goo.gl/L5dgQe3NYqcN6J2w7"
            className="text-blue-800 underline my-2 "
          >
            Noble Mansion, P1-01, Level 1 Podium, Plaza 33, Jalan Kemajuan,
            Seksyen 13, 46200 Petaling Jaya, Selangor
          </a>

          <iframe
            className="w-full mx-auto mt-5"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.9430137602035!2d101.63573317568436!3d3.10977985339193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4be6ff07d385%3A0xa8bd81ac1b6a3ce5!2zTm9ibGUgTWFuc2lvbiDlpKfpmb3ln47phZLlrrY!5e0!3m2!1sen!2smy!4v1694952594375!5m2!1sen!2smy"
            loading="lazy"
            referrerPolicy="no-referrer"
            title="noblemansion"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
