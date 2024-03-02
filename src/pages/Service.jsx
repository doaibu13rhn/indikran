import React from "react";
import { Link } from "react-router-dom";
import getImageUrl from "../utils/imageGetter";
// import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Service() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-shade bg-cover bg-center bg-no bg-repeat w-full">
          <div className="text-white md:mx-20 mx-8 min-h-[50vh] items-end flex">
            <div className="flex pb-10">
              <h2 className="md:text-6xl text-4xl font-extralight">SERVICES</h2>
              <img
                src={getImageUrl("arrow", "webp")}
                alt="arrow"
                className="w-7 h-7 rotate-90 ms-2"
              />
            </div>
          </div>
          <div className="w-full">
            <img
              src={getImageUrl("service-section-1", "webp")}
              alt="indikran-workshop"
              className="hidden md:block"
            />
            <img
              src={getImageUrl("service-section-1-mob", "webp")}
              alt="indikran-workshop"
              className="block md:hidden"
            />
          </div>
        </section>

        <section className="bg-white">
          <div className="md:mx-20 mx-8 h-auto min-h-screen">
            <div className="md:flex pt-20">
              <p className="text-second md:w-1/2 font-bold">SERVICES</p>
              <article className="md:flex md:w-1/2">
                {/* Mobile */}
                <p className="text-xl block md:hidden mt-10 md:mt-0">
                  A{" "}
                  <b className="text-prime">
                    leading service company established since 2000
                  </b>{" "}
                  specializing in heavy machinery.
                </p>
                {/* Dekstop */}
                <p className="text-[2.5rem] hidden md:block">
                  A <b className="text-prime">leading service company</b>
                </p>
              </article>
            </div>
            <p className="text-[2.6rem] leading-tight md:block hidden">
              <b className="text-prime">established since 2000</b> specializing{" "}
              <br /> in heavy machinery.
            </p>

            <div className="md:flex mt-14">
              <div className="md:w-1/2"></div>
              <div className="md:w-1/2">
                <article className="">
                  <p className="text-second md:text-2xl text-xl text-justify">
                    Indikran is a service company that was established in the
                    early 2000s. It is an authorised legal entity that engages
                    in the sales, refurbishment and testing of electrical
                    products.
                  </p>
                  <p className="py-10 text-justify">
                    We started with hydraulic equipment and have expanded our
                    professional support to the mining, earth-moving, and
                    construction industries.
                  </p>
                </article>
              </div>
            </div>

            <details className="collapse" id="refurbishment">
              <summary className="collapse text-xl font-medium border-t-2 border-x-2 mb-10 rounded-bl-none rounded-br-none border-dashed border-second">
                <div className="w-full flex p-4 items-center justify-around">
                  <div className="md:w-1/2 w-[30%]">
                    <p className="text-second">01</p>
                  </div>
                  <div className="md:w-1/2 w-[70%] flex justify-between items-center">
                    <p>Refurbishment</p>
                    <div className="flex flex-col items-center">
                      <img
                        src={getImageUrl("arrow-2", "webp")}
                        alt="arrow"
                        className="w-[15px]"
                      />
                      <p className="text-second text-[0.7rem] hidden md:block">
                        ENLARGE
                      </p>
                    </div>
                  </div>
                </div>
              </summary>
              <div className="collapse-content md:flex md:justify-between w-full mb-8">
                <p className="md:w-1/2 hidden md:block md:text-xl text-second">
                  We offer a comprehensive <br /> range of consultation <br />{" "}
                  and services
                </p>
                <p className="text-second md:hidden block">
                  We offer a comprehensive range of consultation and services
                </p>
                <div className="md:w-[25%] w-full mt-5 md:mt-0">
                  <img
                    src={getImageUrl("service-mp", "webp")}
                    alt="service-manpower"
                    className="w-[90%] hidden md:block"
                  />
                  <img
                    src={getImageUrl("service-manpower-mob", "webp")}
                    alt="service-manpower"
                    className="w-full md:hidden block"
                  />
                </div>
                <p className="md:w-[25%] md:text-xs text-[0.8rem] mt-5 md:mt-0">
                  We offer a comprehensive range of consultation and services
                  for Refurbishment that includes Mechanical and Electrical
                  Tricks, Excavator and Loaders. <br />
                  <br /> This includes identifying each major or minor part that
                  needs to be analysed on or off-site, reporting with solutions
                  from our Experts, dismantle, repair, sourcing, adjustment,
                  testing and warranty to give the best outcome for You.
                </p>
              </div>
            </details>
            <details className="collapse">
              <summary className="collapse text-xl font-medium border-t-2 border-x-2 mb-10 rounded-bl-none rounded-br-none border-dashed border-second">
                <div className="w-full flex p-4 items-center justify-around">
                  <div className="md:w-1/2 w-[30%]">
                    <p className="text-second">02</p>
                  </div>
                  <div className="md:w-1/2 w-[70%] flex justify-between items-center">
                    <p>Testing</p>
                    <div className="flex flex-col items-center">
                      <img
                        src={getImageUrl("arrow-2", "webp")}
                        alt="arrow"
                        className="w-[15px]"
                      />
                      <p className="text-second text-[0.7rem] hidden md:block">
                        ENLARGE
                      </p>
                    </div>
                  </div>
                </div>
              </summary>
              <div className="collapse-content md:flex md:justify-between w-full mb-8">
                <p className="md:w-1/2 hidden md:block md:text-xl text-second">
                  With one of the largest <br /> test benches for hydraulic{" "}
                  <br /> and transmission in Eastern Indonesia
                </p>
                <p className="text-second md:hidden block">
                  With one of the largest test benches for hydraulic and
                  transmission in Eastern Indonesia
                </p>
                <div className="md:w-[25%] w-full mt-5 md:mt-0">
                  <img
                    src={getImageUrl("service-mp", "webp")}
                    alt="service-manpower"
                    className="w-[90%] hidden md:block"
                  />
                  <img
                    src={getImageUrl("service-manpower-mob", "webp")}
                    alt="service-manpower"
                    className="w-full md:hidden block"
                  />
                </div>
                <p className="md:w-[25%] md:text-xs text-[0.8rem] mt-5 md:mt-0">
                  With one of the largest test benches for hydraulic and
                  transmission in Eastern Indonesia, we'll be the best at
                  ensuring the quality and performance of Your product. <br />
                  <br /> From motor hydraulic, pump to bolting tools, we’re able
                  to check and ensure it’s within the Manufacturer's standard
                  for its flow and pressure.
                </p>
              </div>
            </details>
            <details className="collapse">
              <summary className="collapse text-xl font-medium border-t-2 border-x-2 mb-10 rounded-bl-none rounded-br-none border-dashed border-second">
                <div className="w-full flex p-4 items-center justify-around">
                  <div className="md:w-1/2 w-[30%]">
                    <p className="text-second">03</p>
                  </div>
                  <div className="md:w-1/2 w-[70%] flex justify-between items-center">
                    <p>Manpower</p>
                    <div className="flex flex-col items-center">
                      <img
                        src={getImageUrl("arrow-2", "webp")}
                        alt="arrow"
                        className="w-[15px]"
                      />
                      <p className="text-second text-[0.7rem] hidden md:block">
                        ENLARGE
                      </p>
                    </div>
                  </div>
                </div>
              </summary>
              <div className="collapse-content md:flex md:justify-between w-full mb-8">
                <p className="md:w-1/2 hidden md:block md:text-xl text-second">
                  Our Teams are <br /> highly experienced <br /> and registered
                </p>
                <p className="text-second md:hidden block">
                  Our Teams are highly experienced and registered
                </p>
                <div className="md:w-[25%] w-full mt-5 md:mt-0">
                  <img
                    src={getImageUrl("service-mp", "webp")}
                    alt="service-manpower"
                    className="w-[90%] hidden md:block"
                  />
                  <img
                    src={getImageUrl("service-manpower-mob", "webp")}
                    alt="service-manpower"
                    className="w-full md:hidden block"
                  />
                </div>
                <p className="md:w-[25%] md:text-xs text-[0.8rem] mt-5 md:mt-0">
                  Our Teams are highly experienced and registered to work
                  on-site while adhering to strict safety regulations for more
                  than 20 years. <br />
                  <br /> Furthermore, we offer consultation on equipment for use
                  both on and offsite based on the needs of the Companies we
                  partner with.
                </p>
              </div>
            </details>
            <details className="collapse">
              <summary className="collapse text-xl font-medium border-t-2 border-x-2 mb-10 rounded-bl-none rounded-br-none border-dashed border-second">
                <div className="w-full flex p-4 items-center justify-around">
                  <div className="md:w-1/2 w-[30%]">
                    <p className="text-second">04</p>
                  </div>
                  <div className="md:w-1/2 w-[70%] flex justify-between items-center">
                    <p>Supply</p>
                    <div className="flex flex-col items-center">
                      <img
                        src={getImageUrl("arrow-2", "webp")}
                        alt="arrow"
                        className="w-[15px]"
                      />
                      <p className="text-second text-[0.7rem] hidden md:block">
                        ENLARGE
                      </p>
                    </div>
                  </div>
                </div>
              </summary>
              <div className="collapse-content md:flex md:justify-between w-full mb-8">
                <p className="md:w-1/2 hidden md:block md:text-xl text-second">
                  To ensure a smoother process <br /> that works better
                </p>
                <p className="text-second md:hidden block">
                  To ensure a smoother process that works better
                </p>
                <div className="md:w-[25%] w-full mt-5 md:mt-0">
                  <img
                    src={getImageUrl("service-mp", "webp")}
                    alt="service-manpower"
                    className="w-[90%] hidden md:block"
                  />
                  <img
                    src={getImageUrl("service-manpower-mob", "webp")}
                    alt="service-manpower"
                    className="w-full md:hidden block"
                  />
                </div>
                <p className="md:w-[25%] md:text-xs text-[0.8rem] mt-5 md:mt-0">
                  To ensure a smoother process that works better for Your
                  timeline, let us help you source component counterparts for
                  Your needs. From main pumps to regulators, just let us know
                  how we can assist You.
                </p>
              </div>
            </details>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Service;
