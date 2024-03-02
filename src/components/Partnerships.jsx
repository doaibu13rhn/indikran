import React from "react";
import getImageUrl from "../utils/imageGetter";

function Partnerships() {
  return (
    <>
      <div className="bg-white">
        <div className="md:flex md:mt-[10rem] pt-[10rem] mx-8 md:mx-20">
          <p className="text-second md:w-1/2 font-bold">PARTNERSHIPS</p>
          <article className="w-1/2 hidden md:block">
            <h2 className="text-[2.3rem]">
              We've formed <b className="text-prime">Valuable</b>
            </h2>
          </article>
          {/* Mobile */}
          <p className="text-[1.18rem] block md:hidden mt-14 font-light">
            We've formed{" "}
            <b className="text-prime font-bold">
              valuable partnerships and collaborations
            </b>{" "}
            with a diverse range of businesses
          </p>
        </div>
        {/* Dekstop */}
        <h2 className="text-[2.7rem] md:block hidden mx-20">
          <b className="text-prime">partnerships and collaborations</b> with a
          diverse range of businesses
        </h2>

        <div className="w-full md:py-14 py-10 flex overflow-hidden justify-between animated-images-container">
          <div className="md:flex hidden">
            <img
              src={getImageUrl("partner-1", "webp")}
              alt="partnerships"
              className="animated-image max-w-full h-[50px]"
            />
          </div>
          <div className="md:flex hidden">
            <img
              src={getImageUrl("partner-2", "webp")}
              alt="partnerships"
              className="animated-image max-w-full h-[50px]"
            />
          </div>
          <div className="md:flex hidden">
            <img
              src={getImageUrl("partner-3", "webp")}
              alt="partnerships"
              className="animated-image max-w-full h-[50px]"
            />
          </div>
          <div className="md:flex hidden">
            <img
              src={getImageUrl("partner-4", "webp")}
              alt="partnerships"
              className="animated-image max-w-full h-[50px]"
            />
          </div>
          <div className="md:flex hidden">
            <img
              src={getImageUrl("partner-5", "webp")}
              alt="partnerships"
              className="animated-image w-24 h-[50px]"
            />
          </div>
          <div className="md:flex hidden">
            <img
              src={getImageUrl("partner-6", "webp")}
              alt="partnerships"
              className="animated-image max-w-full h-[50px]"
            />
          </div>
          <div className="md:flex hidden">
            <img
              src={getImageUrl("partner-7", "webp")}
              alt="partnerships"
              className="animated-image max-w-full h-[50px]"
            />
          </div>

          <img
            src={getImageUrl("partnerships-mob", "webp")}
            alt="partnerships"
            className="md:hidden block"
          />
        </div>
      </div>
    </>
  );
}

export default Partnerships;
