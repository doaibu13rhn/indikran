import React from "react";
import getImageUrl from "../utils/imageGetter";

function Footer() {
  return (
    <>
      <footer className="bg-shade w-full min-h-[40vh] h-auto border-t-2 border-dashed border-third">
        <div className="md:mx-20 mx-8 h-full">
          <div className="w-full flex md:justify-end justify-between items-center pt-10">
            <img
              src={getImageUrl("logo-white", "webp")}
              alt="logo-indikran"
              className="w-[40vw] md:hidden block"
            />
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
            <div className="w-4/5 hidden md:block">
              <img
                src={getImageUrl("logo-white", "webp")}
                alt="logo-indikran"
                className="w-[18vw]"
              />
            </div>
            <div className="md:w-2/5 md:flex">
              <div className="w-full md:flex-col flex h-[13vh]">
                <p className="text-white w-1/2">service</p>
                <article className="font-thin text-third text-[0.7rem] md:pt-5 w-1/3 flex md:flex-col gap-x-6">
                  <div>
                    <p className="">Refurbishment</p>
                    <p className="mt-2">Testing</p>
                  </div>
                  <div>
                    <p className="md:mt-2">Manpower</p>
                    <p className="mt-2">Sales</p>
                  </div>
                </article>
              </div>
              <div className="md:flex-col flex">
                <p className=" text-white w-1/2 md:w-full">Locations</p>
                <p className="text-third md:text-[0.7rem] text-xs md:pt-5 w-1/2 md:w-full">
                  Jalan Mulawarman No.227, Sepinggan, Kecamatan Balikpapan
                  Selatan, Kota Balikpapan, Kalimantan Timur 76114
                </p>
                <div className="md:flex items-center pt-5 hidden">
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
            <p className="text-[0.6rem] text-white font-thin w-1/2 md:w-full">
              ©2023 PT. Indikran Hydrauliks
            </p>
            <p className="text-[0.6rem] text-white font-thin w-1/2 md:w-full justify-end flex">
              All trademarks are property of their respective owners
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
