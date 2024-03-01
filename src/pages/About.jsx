import React from "react";
import { Link } from "react-router-dom";
import getImageUrl from "../utils/imageGetter";
// import Header from "../components/Header";
import Footer from "../components/Footer";
import Partnerships from "../components/Partnerships";
import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-white bg-cover bg-center bg-no bg-repeat w-full">
          <div className="md:mx-20 mx-8 md:min-h-[50vh] min-h-[35vh] items-end flex">
            <div className="flex pb-10">
              <h2 className="md:text-6xl text-4xl font-extralight">ABOUT US</h2>
              <img
                src={getImageUrl("arrow", "webp")}
                alt="arrow"
                className="w-7 h-7 rotate-90 ms-2"
              />
            </div>
          </div>
          <img
            src={getImageUrl("about-section-1", "webp")}
            alt="indikran-workshop"
            className="w-full hidden md:block"
          />
          <img
            src={getImageUrl("about-section-1-mob", "webp")}
            alt="indikran-workshop"
            className="w-full block md:hidden"
          />
        </section>

        <section className="bg-white">
          <div className="md:mx-20 mx-8 min-h-screen h-auto">
            <div className="md:flex pt-20">
              <p className="text-second md:w-1/2 font-bold">ABOUT US</p>
              <article className="md:flex md:w-1/2">
                {/* Dekstop */}
                <p className="text-[2.2rem] hidden md:block">
                  <b className="text-prime">We pioneer the future </b>with
                </p>
                {/* Mobile */}
                <p className="text-xl md:hidden block mt-10">
                  <b className="text-prime">We pioneer the future </b>with an{" "}
                  <b className="text-prime">efficient solutions</b>
                  specializing in heavy machinery
                </p>
              </article>
            </div>
            <p className="text-[2.6rem] leading-tight hidden md:block">
              an<b className="text-prime"> efficient solutions</b> specializing{" "}
              <br /> in heavy machinery.
            </p>

            <div className="flex mt-14">
              <div className="md:w-1/2"></div>
              <div className="md:w-1/2">
                <article className="">
                  <p className="text-fourth md:text-2xl text-base text-justify">
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
                  <p>
                    Additionally, we are a supplier and procurement company for
                    goods and services.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <div className="py-5">
          <iframe
            className="w-full h-[90vh]"
            src="https://www.youtube.com/embed/CFGijmZZYHA?si=sADWQzIJdkoyn6TO"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <section className="bg-white md:bg-[url('/src/assets/images/cover-white.webp')] bg-center bg-cover bg-no-repeat">
          <div className="md:mx-20 mx-8 min-h-screen h-auto">
            <div className="md:flex pt-20">
              <p className="text-second md:w-1/2 font-bold">
                Leading the way to <br /> provide best solutions
              </p>
              <article className="flex md:w-1/2 md:mt-0 mt-10">
                <p className="md:text-[3.5rem] text-6xl font-extralight text-prime">
                  VISION
                </p>
              </article>
            </div>

            <div className="md:flex pt-14">
              <div className="md:w-1/2"></div>
              <div className="md:w-1/2">
                <article className="">
                  <p className="text-second md:text-4xl text-xl font-medium">
                    “Enhancing these services consistently and maintaining high
                    quality work”
                  </p>
                  <div className="w-full md:hidden block mt-5">
                    <img
                      src={getImageUrl("about-section-2-1", "webp")}
                      alt="inidkran-workshop"
                    />
                  </div>
                  <p className="py-10 text-justify">
                    To provide timely to the Customer reliable equipment with
                    the maximum possible availability at the lowest possible
                    cost per hour.
                    <br />
                    <br />
                    <br />
                    We are dedicated to being leaders in the sales, services,
                    repair, and dynamic testing by enhancing these services
                    consistently and maintaining high quality work with the
                    support of the Brands we partner with.
                  </p>
                </article>
              </div>
            </div>
          </div>
          <div className="w-full h-full md:flex hidden">
            <div className="w-1/2 h-1/2">
              <div className="w-full">
                <img
                  src={getImageUrl("about-section-2-1", "webp")}
                  alt="inidkran-workshop"
                />
              </div>
            </div>
            <div className="w-1/2 h-1/2">
              <div className="w-full h-full flex flex-col">
                <div className="w-1/2 h-1/2">
                  <img
                    src={getImageUrl("about-section-2-2", "webp")}
                    alt="inidkran-workshop"
                  />
                </div>
                <div className="flex w-full">
                  <div className="w-2/5 h-1/2 "></div>
                  <div className="w-3/5 h-1/2 ">
                    <img
                      src={getImageUrl("about-section-2-3", "webp")}
                      alt="inidkran-workshop"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white bg-cover">
          {/* mobile */}
          <div className="flex md:hidden">
            <p className="ms-8 text-[12px] w-1/2 text-second font-semibold">
              PROCESS OF WORK <br /> BEST FOR YOUR NEEDS
            </p>
            <img src={getImageUrl("repeb-mob", "webp")} alt="refurbishment" />
          </div>
          <div className="md:mx-20 mx-8 h-auto min-h-screen">
            {/* Dekstop */}
            <div className="md:flex mt-20 hidden">
              <p className="text-second w-1/2 font-bold">
                PROCESS OF WORK <br /> BEST FOR YOUR NEEDS
              </p>
              <article className="flex w-1/2">
                <p className="text-[3.5rem] font-thin">MISSION</p>
              </article>
            </div>
            {/* Mobile */}
            <article className="block md:hidden mt-10 text-prime">
              <p className="text-7xl font-extralight">MISSION</p>
            </article>

            <div className="md:flex mt-14">
              <div className="md:w-1/2"></div>
              <div className="md:w-1/2">
                <article className="">
                  <p className="text-second md:text-4xl text-xl font-semibold">
                    “Deliver a satisfactory work service to our clients”
                  </p>
                  <img
                    src={getImageUrl("home-section-3-mob", "webp")}
                    alt="indikran-workshop"
                    className="block md:hidden mt-8"
                  />
                  <p className="py-10 text-justify">
                    At our Company, we strive to provide our Partners and
                    Clients with the best possible service. Our team of
                    experienced and professional workers is equipped with the
                    latest technology to ensure that we meet all of our Clients'
                    needs. We are confident that we can deliver a satisfactory
                    work service to our Clients.
                  </p>
                </article>
              </div>
            </div>

            <div className="md:flex mt-20">
              <p className="text-second md:w-1/2 font-bold">PROGRESS</p>
              <article className="md:flex md:w-1/2">
                <p className="text-[2.2rem] hidden md:block">
                  Our team <b className="text-prime">delivers solutions</b>
                </p>
                <p className="text-xl md:hidden block mt-8">
                  <b className="text-prime">We pioneer the future</b> with an{" "}
                  <b className="text-prime">efficient solutions</b> specializing
                  in heavy machinery
                </p>
              </article>
            </div>
            <p className="text-[2.6rem] leading-tight md:block hidden">
              that<b className="text-prime"> help our clients optimezed</b>{" "}
              their <br />{" "}
              <b className="text-prime">manufacturing operations</b>
            </p>
          </div>
        </section>

        <div className="bg-white bg-cover bg-center bg-no-repeat">
          <img
            src={getImageUrl("about-section-3", "webp")}
            alt="indikran-employee"
            className="py-7 block md:hidden"
          />

          <div className="md:mx-20 mx-8">
            <article className="py-10 md:flex">
              <div className="md:w-1/2">
                <div className="md:flex-col">
                  <p className="text-sm">PROJECTS</p>
                  <p className="font-bold text-[4rem] hidden md:block">
                    1,000+
                  </p>
                </div>
                <Link className="flex items-center gap-x-2 md:hidden">
                  <p className="font-bold md:text-[4rem] text-[2.5rem]">
                    1,000+
                  </p>
                  <p className="underline ms-5">View Projects</p>
                  <img
                    src={getImageUrl("arrow", "webp")}
                    alt="arrow"
                    className="w-8"
                  />
                </Link>
              </div>
              <div className="md:w-1/2 flex justify-between mt-10 md:mt-0">
                <div className="flex-col">
                  <p className="text-sm">WAREHOUSE</p>
                  <p className="font-bold md:text-[4rem] text-[2.5rem]">2</p>
                </div>
                <div className="flex-col">
                  <p className="text-sm">OURTEAM</p>
                  <p className="font-bold md:text-[4rem] text-[2.5rem]">105</p>
                  <p className="md:text-[0.7rem] text-[0.5rem]">
                    AND STILL GROWING
                  </p>
                </div>
                <div className="flex-col">
                  <p className="text-sm">PARTNERS</p>
                  <p className="font-bold md:text-[4rem] text-[2.5rem]">2</p>
                </div>
              </div>
            </article>

            <Link className="md:flex items-center gap-x-2 hidden">
              <p className="underline">View Projects</p>
              <img
                src={getImageUrl("arrow", "webp")}
                alt="arrow"
                className="w-8"
              />
            </Link>
          </div>

          <img
            src={getImageUrl("about-section-3", "webp")}
            alt="indikran-employee"
            className="py-7 hidden md:block"
          />
        </div>

        <section className="bg-white">
          <div className="md:mx-20 mx-8">
            <div className="md:flex pt-14">
              <div className="md:w-1/2"></div>
              <div className="md:w-1/2">
                <article className="md:flex">
                  <p className="text-second">CERTIFICATION</p>
                  {/* Mobile */}
                  <p className="text-xl my-10 md:hidden block">
                    Registered and acknowledge by the{" "}
                    <b className="text-prime">
                      International Organization for Standardization (ISO)
                    </b>
                  </p>
                  {/* Dekstop */}
                  <p className="ms-[9rem] text-[2rem] hidden md:block">
                    Registered and
                  </p>
                </article>
                <p className="text-[1.8rem] hidden md:block">
                  acknowledge by the{" "}
                  <b className="text-prime">
                    International <br />
                    Organization for Standardization <br />
                    (ISO)
                  </b>
                </p>

                <div className="certificate">
                  <div className="flex justify-between items-center border-b-2 border-prime border-dashed">
                    <img
                      src={getImageUrl("certificate", "webp")}
                      alt="indikran-document"
                      className="w-[60px]"
                    />
                    <p className="text-[0.8rem]">Lorem ipsum dolor sit amet.</p>
                    <div className="download flex items-center">
                      <p className="text-prime me-5 hidden md:block text-sm">
                        download
                      </p>
                      <img
                        src={getImageUrl("arrow-2", "webp")}
                        alt="arrow-download"
                        className="w-[15px]"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-center border-b-2 border-prime border-dashed">
                    <img
                      src={getImageUrl("certificate", "webp")}
                      alt="indikran-document"
                      className="w-[60px]"
                    />
                    <p className="text-[0.8rem]">Lorem ipsum dolor sit amet.</p>
                    <div className="download flex items-center">
                      <p className="text-prime me-5 hidden md:block text-sm">
                        download
                      </p>
                      <img
                        src={getImageUrl("arrow-2", "webp")}
                        alt="arrow-download"
                        className="w-[15px]"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-center border-b-2 border-prime border-dashed">
                    <img
                      src={getImageUrl("certificate", "webp")}
                      alt="indikran-document"
                      className="w-[60px]"
                    />
                    <p className="text-[0.8rem]">Lorem ipsum dolor sit amet.</p>
                    <div className="download flex items-center">
                      <p className="text-prime me-5 hidden md:block text-sm">
                        download
                      </p>
                      <img
                        src={getImageUrl("arrow-2", "webp")}
                        alt="arrow-download"
                        className="w-[15px]"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-center border-b-2 border-prime border-dashed">
                    <img
                      src={getImageUrl("certificate", "webp")}
                      alt="indikran-document"
                      className="w-[60px]"
                    />
                    <p className="text-[0.8rem]">Lorem ipsum dolor sit amet.</p>
                    <div className="download flex items-center">
                      <p className="text-prime me-5 hidden md:block text-sm">
                        download
                      </p>
                      <img
                        src={getImageUrl("arrow-2", "webp")}
                        alt="arrow-download"
                        className="w-[15px]"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-center border-b-2 border-prime border-dashed">
                    <img
                      src={getImageUrl("certificate", "webp")}
                      alt="indikran-document"
                      className="w-[60px]"
                    />
                    <p className="text-[0.8rem]">Lorem ipsum dolor sit amet.</p>
                    <div className="download flex items-center">
                      <p className="text-prime me-5 hidden md:block text-sm">
                        download
                      </p>
                      <img
                        src={getImageUrl("arrow-2", "webp")}
                        alt="arrow-download"
                        className="w-[15px]"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-center border-b-2 border-prime border-dashed">
                    <img
                      src={getImageUrl("certificate", "webp")}
                      alt="indikran-document"
                      className="w-[60px]"
                    />
                    <p className="text-[0.8rem]">Lorem ipsum dolor sit amet.</p>
                    <div className="download flex items-center">
                      <p className="text-prime me-5 hidden md:block text-sm">
                        download
                      </p>
                      <img
                        src={getImageUrl("arrow-2", "webp")}
                        alt="arrow-download"
                        className="w-[15px]"
                      />
                    </div>
                  </div>
                  <div className="download flex items-center mt-10">
                    <p className="underline me-4">Download All</p>
                    <img
                      src={getImageUrl("arrow", "webp")}
                      alt="arrow"
                      className="rotate-90 w-[30px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Partnerships />
      </main>
      <Footer />
    </>
  );
}

export default About;
