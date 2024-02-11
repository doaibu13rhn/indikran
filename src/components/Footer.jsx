import React from "react";
import getImageUrl from "../utils/imageGetter";

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
            <div className="w-4/5">
              <img
                src={getImageUrl("logo-white", "webp")}
                alt="logo-indikran"
                className="w-[18vw]"
              />
            </div>
            <div className="w-2/5 flex">
              <div className="w-full flex-col">
                <p className=" text-white">service</p>
                <article className="font-thin text-third text-[0.7rem] pt-5">
                  <p className="">Refurbishment</p>
                  <p className="mt-2">Testing</p>
                  <p className="mt-2">Manpower</p>
                  <p className="mt-2">Sales</p>
                </article>
              </div>
              <div className="">
                <p className=" text-white">Locations</p>
                <p className="text-third text-[0.7rem] pt-5">
                  Jalan Mulawarman No.227, Sepinggan, Kecamatan Balikpapan
                  Selatan, Kota Balikpapan, Kalimantan Timur 76114
                </p>
                <div className="flex items-center pt-5">
                  <p className="text-white underline">Open in Maps</p>
                  <img
                    src={getImageUrl("arrow", "webp")}
                    alt="arrow"
                    className="w-6 ms-2"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between pt-16 pb-5">
            <p className="text-[0.6rem] text-white font-thin">
              ©2023 PT. Indikran Hydrauliks
            </p>
            <p className="text-[0.6rem] text-white font-thin">
              All trademarks are property of their respective owners
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
