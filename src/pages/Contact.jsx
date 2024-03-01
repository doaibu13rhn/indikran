import React from "react";
import { Link } from "react-router-dom";
import getImageUrl from "../utils/imageGetter";
// import Header from "../components/Header";
import Footer from "../components/Footer";
import { HashLink } from "react-router-hash-link";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <section className="bg-white">
        <div className="mx-8 md:mx-20">
          <div className="flex items-end min-h-[35vh]">
            <article className="flex items-start">
              <p className="text-4xl md:text-5xl me-4">CONTACT</p>
              <img
                src={getImageUrl("arrow", "webp")}
                alt="arrow"
                className="rotate-90 w-6 h-6"
              />
            </article>
          </div>
        </div>

        <div className="border-b-2 border-second border-dashed mt-10"></div>

        <div className="mx-8 md:mx-20">
          <div className="pt-8 md:flex md:pb-10">
            <div className="md:w-[40%]">
              <article className="">
                <p className="text-second mb-8 font-bold">Locations</p>
                <p className="text-second font-extralight">
                  Headquartered in industrial environment Balikpapan, Kalimantan
                  Indonesia with two warehouses in the area
                </p>
              </article>
              <article className="pt-8">
                <p className="text-second mb-8 font-bold">Office & Workshop</p>
                <p className="font-medium text-second">
                  Jalan Mulawarman No. 45, Sepinggan, Kecamatan Balikpapan
                  Selatan, Kota Balikpapan, Kalimantan Timur 76114
                </p>
                <div className="w-full justify-between flex md:block text-sm font-medium pt-6 md:pt-16">
                  <div className="">
                    <p>P: 0542 - 762227</p>
                    <p>P: 0542 - 770163</p>
                  </div>
                  <div className="">
                    <p>F: 0542 - 770212</p>
                    <p>E: marketing@indikran.com</p>
                  </div>
                </div>
              </article>
            </div>

            <div className="contact py-8 md:py-0 md:w-[60%] md:ms-4">
              <p className="font-bold">GET IN TOUCH</p>
              <input
                type="text"
                placeholder="*Name"
                className="input input-bordered border-black w-full mt-5 max-w-xs md:me-3"
              />
              <input
                type="text"
                placeholder="*Surname"
                className="input input-bordered border-black w-full mt-5 max-w-xs"
              />
              <input
                type="text"
                placeholder="*E-mail"
                className="input input-bordered border-black w-full mt-5 max-w-xs md:me-3"
              />
              <input
                type="text"
                placeholder="*Phone number"
                className="input input-bordered border-black w-full mt-5 max-w-xs"
              />
              <input
                type="text"
                placeholder="*Company"
                className="input input-bordered border-black w-full mt-5 max-w-xs md:me-3"
              />
              <input
                type="text"
                placeholder="*Job Title"
                className="input input-bordered border-black w-full mt-5 max-w-xs"
              />
              <select className="select select-bordered border-black mt-5 max-w-xs w-full md:max-w-2xl md:me-3">
                <option disabled selected>
                  *Subject
                </option>
                <option>Application Letter</option>
                <option>Business Agreement</option>
              </select>
              <textarea
                placeholder="Message"
                className="textarea mt-5 border-black textarea-bordered textarea-sm w-full max-w-xs md:max-w-2xl leading-10"
              ></textarea>
            </div>
          </div>
        </div>

        <div
          className="bg-[url('/src/assets/images/maps.webp')] bg-cover bg-center bg-no-repeat hidden md:block w-full h-[70vh]"
          id="maps"
        >
          <div className="flex mx-20 justify-end items-end h-[90%]">
            <HashLink
              className="flex items-center"
              to="https://maps.app.goo.gl/xpmG5HGQcj3GYMW5A"
            >
              <p className="text-black underline">Open in Maps</p>
              <img
                src={getImageUrl("arrow", "webp")}
                alt="arrow"
                className="w-7 h-7 ms-3"
              />
            </HashLink>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
