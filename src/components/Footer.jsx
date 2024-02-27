import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import getImageUrl from "../utils/imageGetter";

function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <footer
        className={`bg-${
          isHomePage ? "white" : "shade"
        } w-full min-h-[40vh] h-auto`}
      >
        <div>
          <div className="w-full md:h-[70vh] h-[50vh] bg-[url('/src/assets/images/home-section-5-mob.webp')] md:bg-[url('/src/assets/images/home-section-5.webp')] bg-cover bg-center bg-no-repeat">
            <article className="md:mx-20 mx-8 flex h-full items-end ">
              <p className="text-white py-10 md:text-[3.3rem] text-[1.7rem] font-light">
                Service company established since 2000
              </p>
            </article>
          </div>

          <article className="md:flex md:mx-20 mx-8 mt-20 items-start">
            <h2
              className={`md:w-1/2 md:text-3xl text-[1.2rem] ${
                isHomePage ? "text-black" : "text-white"
              }`}
            >
              Need help? We’re always <br />
              <b className={isHomePage ? "text-prime" : "text-second"}>
                here to collaborate
              </b>
            </h2>
            <Link
              className="flex md:w-1/2 md:justify-end md:items-center py-10"
              to="/en/contact/#"
            >
              <p
                className={`underline ${
                  isHomePage ? "text-prime" : "text-white"
                } text-xl font-light`}
              >
                Get in touch with us
              </p>
              <img
                src={getImageUrl("arrow", "webp")}
                alt="arrow"
                className="max-w-full max-h-full ms-3"
              />
            </Link>
          </article>
        </div>
        <div className="border-t-2 border-dashed border-third"></div>
        <div className="md:mx-20 mx-8 h-full ">
          <div className="w-full flex md:justify-end justify-between items-center pt-10">
            {isHomePage ? (
              <img
                src={getImageUrl("logo-black", "webp")}
                alt="logo-indikran"
                className="w-[40vw] md:hidden block"
              />
            ) : (
              <img
                src={getImageUrl("logo-white", "webp")}
                alt="logo-indikran"
                className="w-[40vw] md:hidden block"
              />
            )}

            <a href="#">
              {isHomePage ? (
                <img
                  src={getImageUrl("arrow-up", "webp")}
                  alt="arrow-white"
                  className="w-12 h-12"
                />
              ) : (
                <img
                  src={getImageUrl("arrow-white", "webp")}
                  alt="arrow-white"
                  className="w-12 h-12"
                />
              )}
              <p
                className={`${
                  isHomePage ? "text-black" : "text-white"
                } text-[0.6rem]`}
              >
                Back to top
              </p>
            </a>
          </div>

          <div className="w-full pt-10 flex">
            <div className="w-4/5 hidden md:block">
              {isHomePage ? (
                <img
                  src={getImageUrl("logo-black", "webp")}
                  alt="logo-indikran"
                  className="w-[45vw] md:w-[15vw]"
                />
              ) : (
                <img
                  src={getImageUrl("logo-white", "webp")}
                  alt="logo-indikran"
                  className="w-[45vw] md:w-[15vw]"
                />
              )}
            </div>
            <div className="md:w-2/5 md:flex">
              <div className="w-full md:flex-col flex h-[13vh]">
                <p
                  className={`w-1/2 ${
                    isHomePage ? "text-black" : "text-white"
                  }`}
                >
                  Service
                </p>

                <article className="font-normal text-third text-[0.7rem] md:pt-5 w-1/3 flex md:flex-col gap-x-6">
                  <HashLink smooth to="/en/service/#refurbishment">
                    <p className="">Refurbishment</p>
                    <p className="mt-2">Testing</p>
                  </HashLink>
                  <HashLink smooth to="/en/service/#refurbishment">
                    <p className="md:mt-2">Manpower</p>
                    <p className="mt-2">Supply</p>
                  </HashLink>
                </article>
              </div>
              <div className="md:flex-col flex">
                <p
                  className={`${
                    isHomePage ? "text-black" : "text-white"
                  } w-1/2 md:w-full`}
                >
                  Locations
                </p>
                <p className="text-third md:text-[0.7rem] text-xs md:pt-5 w-1/2 md:w-full">
                  Jalan Mulawarman No.227, Sepinggan, Kecamatan Balikpapan
                  Selatan, Kota Balikpapan, Kalimantan Timur 76114
                </p>
                <div className="md:flex items-center pt-5 hidden">
                  <p
                    className={`underline ${
                      isHomePage ? "text-second" : "text-white"
                    }`}
                  >
                    Open in Maps
                  </p>
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
            <p
              className={`text-[0.6rem] w-1/2 md:w-full ${
                isHomePage ? "text-black" : "text-white"
              }`}
            >
              ©2023 PT. Indikran Hydrauliks
            </p>
            <p
              className={`text-[0.6rem] ${
                isHomePage ? "text-black" : "text-white"
              } w-1/2 md:w-full justify-end flex`}
            >
              All trademarks are property of their respective owners
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
