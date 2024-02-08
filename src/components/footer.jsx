import React from "react";
import getImageUrl from "../utils/imageGetter";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-shade w-full min-h-[40vh] h-auto border-t-2 border-dashed border-third">
        <div className="mx-20 h-full">
          <div className="w-full flex justify-end items-center pt-10">
            <a href="#">
              <img
                src={getImageUrl("arrow-white", "webp")}
                alt="arrow-white"
                className="w-12 h-12"
              />
              <p className="text-third text-[0.6rem] font-thin">Back to top</p>
            </a>
          </div>
          <div className="w-full pt-10 flex">
            <div className="w-1/2">
              <img
                src={getImageUrl("logo-white", "webp")}
                alt="logo-indikran"
                className="w-[18vw]"
              />
            </div>
            <div className="w-1/2">
              <div className="services text-white">
                <p>service</p>
                <article className="font-thin text-third pt-5">
                  <p>Refurbishment</p>
                  <p>Testing</p>
                  <p>Manpower</p>
                  <p>Sales</p>
                </article>
              </div>
              <div className="locations">
                <p>Locations</p>
                <p>
                  Jalan Mulawarman No.227, Sepinggan, Kecamatan Balikpapan
                  Selatan, Kota Balikpapan, Kalimantan Timur 76114
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
