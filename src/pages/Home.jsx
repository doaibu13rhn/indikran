import React from "react";
import { Link } from "react-router-dom";
import getImageUrl from "../utils/imageGetter";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { HashLink } from "react-router-hash-link";

function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-[url('/src/assets/images/main-section-mobile.webp')] md:bg-[url('/src/assets/images/main-section.webp')] bg-cover bg-center bg-no-repeat w-full">
          <div className="flex mx-8 md:mx-20 min-h-[100vh] text-white items-end">
            <article className="w-full h-[25vh] mb-1">
              {/* Dekstop */}
              <p className="text-[4rem] leading-none flex-1 justify-center hidden md:block">
                <b>An effecient approach</b>
                <br />
                specializing in <b>heavy machinery</b>
              </p>
              {/* Mobile */}
              <p className="text-white block md:hidden font-thin text-[1.6rem]">
                <b className="font-bold">An efficient</b> <br />
                <b className="font-bold">approach</b> Specializing <br /> in
                <b className="font-bold"> heavy machinery</b>
              </p>
            </article>
          </div>
        </section>

        <section className="bg-[url('/src/assets/images/cover-blue-mobile.webp')] md:bg-[url('/src/assets/images/cover-blue-2.webp')] bg-cover bg-center bg-no-repeat w-full md:py-20 py-10">
          <div className="mx-8 md:mx-20 h-auto min-h-screen">
            <div className="md:flex">
              <p className="text-second md:w-1/2 w-full">ABOUT US</p>
              <article className="md:w-1/2 w-full h-[30vh] mt-16 md:mt-0">
                <p className="text-white text-justify text-xl font-extralight">
                  Indikran is a service company that was established in the
                  early 2000s. It is an authorised legal entity that engages in
                  the sales, refurbishment and testing of electrical products.
                </p>
                <Link className="flex mt-12 items-center" to="/en/about">
                  <p className="text-white underline">Learn More</p>
                  <img
                    src={getImageUrl("arrow", "webp")}
                    alt="arrow"
                    className="max-w-full max-h-full ms-3"
                  />
                </Link>
              </article>
            </div>

            <div className="md:flex md:mt-[10rem] mt-[10rem]">
              <p className="text-second w-1/2">SERVICES</p>
              {/* mobile */}
              <article className="md:hidden block mt-14 text-[1.2rem]">
                <p className="text-white font-extralight">
                  Our service
                  <b className="text-second font-bold">
                    {" "}
                    business capabilities
                  </b>
                </p>
                <p className="text-white font-extralight">
                  with an
                  <b className="text-second font-bold">
                    {" "}
                    effecient operational
                  </b>
                </p>
                <p className="text-white font-extralight">
                  and
                  <b className="text-second font-bold"> adaptable solutions</b>
                </p>
              </article>
              {/* dekstop */}
              <article className="flex w-1/2">
                <h2 className="text-white text-justify text-5xl md:block hidden">
                  Our service <b className="text-second">business</b>
                </h2>
                {/* <h2 className="text-second text-5xl ms-2 font-bold">business</h2> */}
              </article>
            </div>
            <h2 className="text-white text-5xl md:block hidden">
              <b className="text-second">capabilities</b> with an{" "}
              <b className="text-second">effecient operational</b> and{" "}
              <b className="text-second">adaptable solutions</b>
            </h2>

            {/* Mobile */}
            <div className="carousel mt-14 md:hidden carousel-center p-4 space-x-4 bg-transpatent rounded-box">
              <div className="carousel-item">
                <img
                  src={getImageUrl("refurbishment-mob", "webp")}
                  className=""
                />
              </div>
              <div className="carousel-item">
                <img
                  src={getImageUrl("refurbishment-mob", "webp")}
                  className=""
                />
              </div>
              <div className="carousel-item">
                <img
                  src={getImageUrl("refurbishment-mob", "webp")}
                  className=""
                />
              </div>
              <div className="carousel-item">
                <img
                  src={getImageUrl("refurbishment-mob", "webp")}
                  className=""
                />
              </div>
            </div>

            <HashLink
              className="flex mt-12 items-center md:hidden text-white font-extralight mb-10"
              smooth
              to="/en/service/#refurbishment"
            >
              <p className="underline">Learn More</p>
              <img
                src={getImageUrl("arrow", "webp")}
                alt="arrow"
                className="max-w-full max-h-full ms-4"
              />
            </HashLink>

            {/* Dekstop */}
            <div className="md:flex text-white mt-14 gap-5 hidden">
              <div className="w-1/2"></div>
              <div className="w-1/2">
                <div className="flex w-full gap-5">
                  <div className="w-1/2">
                    <Link to="/en/service#refurbishment" className="">
                      <img
                        src={getImageUrl("refurbishment", "webp")}
                        alt="refurbishment"
                        className="max-w-full max-h-full"
                      />
                    </Link>
                  </div>
                  <div className="w-1/2 text-white">
                    <Link to="/en/service" className="">
                      <img
                        src={getImageUrl("testing", "webp")}
                        alt="testing"
                        className="max-w-full max-h-full"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:flex gap-5">
              <div className="w-1/2">
                <div className="flex w-full gap-5">
                  <div className="w-1/2 text-white"></div>
                  <div className="w-1/2">
                    <Link to="/en/service" className="gap-4">
                      <img
                        src={getImageUrl("manpower", "webp")}
                        alt="manpower"
                        className="max-w-full max-h-full"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex w-full gap-5">
                  <div className="w-1/2">
                    <Link to="/en/service" className="gap-4">
                      <img
                        src={getImageUrl("supply", "webp")}
                        alt="supply"
                        className="max-w-full max-h-full"
                      />
                    </Link>
                  </div>
                  <div className="w-1/2 text-white flex items-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quisquam, officiis.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full">
          <img
            src={getImageUrl("home-section-3", "webp")}
            alt="indikran-workshop"
            className="hidden md:block"
          />
          <img
            src={getImageUrl("home-section-3-mob", "webp")}
            alt="indikran-workshop"
            className="block md:hidden"
          />
        </div>

        <section className="bg-white md:bg-[url('/src/assets/images/cover-white.webp')] bg-cover bg-center bg-no-repeat w-full md:py-20 py-16">
          <div className="md:mx-20 mx-8 h-auto min-h-screen">
            <div className="md:flex items-start w-full">
              <p className="text-second md:w-1/2">VISION AND MISSION</p>
              <article className="md:flex-col md:w-1/2 h-[30vh]">
                <h2 className="md:text-4xl text-[1.2rem] mt-14 md:mt-0 font-light">
                  <b className="text-prime font-semibold">Leading the way</b> to{" "}
                  <b className="text-prime font-semibold">provides</b> the{" "}
                  <b className="text-prime font-semibold">
                    best solutions and services
                  </b>{" "}
                  for your needs
                </h2>
                <Link className="flex mt-12 items-center" to="/en/about">
                  <p className="underline">Learn More</p>
                  <img
                    src={getImageUrl("arrow", "webp")}
                    alt="arrow"
                    className="max-w-full max-h-full ms-3"
                  />
                </Link>
              </article>
            </div>

            {/* Mobile */}
            <div className="md:hidden w-full block">
              <img
                src={getImageUrl("home-section-4-mob", "webp")}
                alt="indikran-workshop"
              />
            </div>

            {/* Dekstop */}
            <div className="md:flex hidden">
              <div className="w-1/2"></div>
              <div className="w-1/2 pt-20">
                <img
                  src={getImageUrl("home-section-4", "webp")}
                  alt="indikran-workshop"
                />
              </div>
            </div>

            <div className="md:flex mt-[10rem] w-full">
              <p className="text-second md:w-1/2">CERTIFICATION</p>
              <article className="md:w-1/2 md:block hidden">
                <h2 className="text-[2.3rem]">Registered and acknowledge</h2>
              </article>
              {/* mobile */}
              <p className="text-[1.2rem] md:hidden block mt-14">
                Registered and acknowledge by the{" "}
                <b className="text-prime">
                  International Organization for Standardization (ISO)
                </b>
              </p>
            </div>
            {/* Dekstop */}
            <h2 className="text-[2.7rem] hidden md:block">
              by the{" "}
              <b className="text-prime">
                International Organization for Standardization (ISO)
              </b>
            </h2>

            <div className="md:flex mt-20">
              <p className="text-second w-1/2"></p>
              <article className="md:flex-col md:w-1/2 h-[30vh]">
                <p className="md:text-xl text-[1.2rem]">
                  Indikran is a service company that was established in the
                  early 2000s. It is an authorised legal entity that engages in
                  the sales, refurbishment and testing of electrical products.
                </p>
                <img
                  src={getImageUrl("indikran-docs", "webp")}
                  alt="document-indikran"
                  className="md:w-1/2 w-4/5 py-4"
                />
                <Link className="flex items-center" to="/en/about">
                  <p className="underline">View Document</p>
                  <img
                    src={getImageUrl("arrow", "webp")}
                    alt="arrow"
                    className="max-w-full max-h-full ms-3"
                  />
                </Link>
              </article>
            </div>

            <div className="md:flex md:mt-[10rem] mt-[14rem] w-full">
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
            <h2 className="text-[2.7rem] md:block hidden">
              <b className="text-prime">partnerships and collaborations</b> with
              diverse range of businesses
            </h2>
          </div>
        </section>

        <div className="w-full md:py-20 py-14 bg-white">
          <img
            src={getImageUrl("partnerships", "webp")}
            alt="partnerships"
            className="md:block hidden"
          />
          <img
            src={getImageUrl("partnerships-mob", "webp")}
            alt="partnerships"
            className="md:hidden block"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
