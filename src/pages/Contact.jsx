import React from "react";
import { Link } from "react-router-dom";
import getImageUrl from "../utils/imageGetter";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Header />
      <section>
        <div className="mx-8 md:mx-20">
          <div className="flex items-end min-h-[35vh]">
            <article className="flex items-start">
              <p className="text-4xl me-4">CONTACT</p>
              <img
                src={getImageUrl("arrow", "webp")}
                alt="arrow"
                className="rotate-90 w-6 h-6"
              />
            </article>
          </div>
        </div>

        <div className="border-b-2 border-second border-dashed mt-14"></div>

        <div className="mx-8 md:mx-20">
          <div className="pt-8">
            <article className="">
              <p className="text-second mb-8 font-bold">Locations</p>
              <p className="text-second font-extralight">
                Headquartered in industrial environment Balikpapan, Kalimantan
                Indonesia with two warehouses in the area
              </p>
            </article>
            <article className="pt-8">
              <p className="text-second mb-8 font-bold">Office & Workshop</p>
              <p className="font-medium">
                Jalan Mulawarman No. 45, Sepinggan, Kecamatan Balikpapan
                Selatan, Kota Balikpapan, Kalimantan Timur 76114
              </p>
              <div className="w-full justify-between flex text-sm font-medium pt-6">
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

            <div className="contact py-8">
              <p className="font-bold">GET IN TOUCH</p>
              <input
                type="text"
                placeholder="*Name"
                className="input input-bordered border-black w-full mt-5 max-w-xs"
              />
              <input
                type="text"
                placeholder="*Surname"
                className="input input-bordered border-black w-full mt-5 max-w-xs"
              />
              <input
                type="text"
                placeholder="*E-mail"
                className="input input-bordered border-black w-full mt-5 max-w-xs"
              />
              <input
                type="text"
                placeholder="*Phone number"
                className="input input-bordered border-black w-full mt-5 max-w-xs"
              />
              <input
                type="text"
                placeholder="*Company"
                className="input input-bordered border-black w-full mt-5 max-w-xs"
              />
              <input
                type="text"
                placeholder="*Job Title"
                className="input input-bordered border-black w-full mt-5 max-w-xs"
              />
              <select className="w-full border border-black rounded-md mt-5 max-w-xs py-3">
                <option value="" className="font-thin">
                  *Subject
                </option>
                <option value="appliaction-letter">application letter</option>
              </select>
              <input
                type="text"
                placeholder="*Message"
                className="input input-bordered border-black w-full mt-5 max-w-xs h-[20vh]"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
