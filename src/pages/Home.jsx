import React from "react";
import { Link } from "react-router-dom";
import getImageUrl from "../utils/imageGetter";
import Header from "../components/Header";
import Footer from "../components/bawah";

function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-[url('/src/assets/images/main-section.webp')] bg-cover bg-center bg-no-repeat w-full">
          <div className="flex mx-20 min-h-[100vh] text-white items-end">
            <article className="w-full h-[25vh] mb-1">
              <p className="text-[4rem] leading-none flex-1 justify-center">
                <b>An effecient approach</b>
                <br />
                specializing in <b>heavy machinery</b>
              </p>
            </article>
          </div>
        </section>

        <section className="bg-[url('/src/assets/images/cover-blue-2.webp')] bg-cover bg-center bg-no-repeat w-full py-20">
          <div className="mx-20 h-auto min-h-screen">
            <div className="flex">
              <p className="text-second w-1/2">ABOUT US</p>
              <article className="flex flex-col w-1/2 h-[30vh]">
                <p className="text-white text-justify text-xl">
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

            <div className="flex mt-[10rem]">
              <p className="text-second w-1/2">SERVICES</p>
              <article className="flex w-1/2">
                <h2 className="text-white text-justify text-5xl">
                  Our service <b className="text-second">business</b>
                </h2>
                {/* <h2 className="text-second text-5xl ms-2 font-bold">business</h2> */}
              </article>
            </div>
            <h2 className="text-white text-5xl">
              <b className="text-second">capabilities</b> with an{" "}
              <b className="text-second">effecient operational</b> and{" "}
              <b className="text-second">adaptable solutions</b>
            </h2>

            <div className="flex text-white mt-14 gap-5">
              <div className="w-1/2"></div>
              <div className="w-1/2">
                <div className="flex w-full gap-5">
                  <div className="w-1/2">
                    <Link to="/en/service" className="">
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

            <div className="flex gap-5">
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
          />
        </div>

        <section className="bg-[url('/src/assets/images/cover-white.webp')] bg-cover bg-center bg-no-repeat w-full py-20">
          <div className="mx-20 h-auto min-h-screen">
            <div className="flex items-start">
              <p className="text-second w-1/2">VISION AND MISSION</p>
              <article className="flex flex-col w-1/2 h-[30vh]">
                <h2 className="text-4xl">
                  <b className="text-prime">Leading the way</b> to{" "}
                  <b className="text-prime">provides</b> the{" "}
                  <b className="text-prime">best solutions and services</b> for
                  your needs
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

            <div className="flex">
              <div className="w-1/2"></div>
              <div className="w-1/2 pt-20">
                <img
                  src={getImageUrl("home-section-4", "webp")}
                  alt="indikran-workshop"
                />
              </div>
            </div>

            <div className="flex mt-[10rem]">
              <p className="text-second w-1/2">CERTIFICATION</p>
              <article className="w-1/2">
                <h2 className="text-[2.3rem]">Registered and acknowledge</h2>
              </article>
            </div>
            <h2 className="text-[2.7rem]">
              by the{" "}
              <b className="text-prime">
                International Organization for Standardization (ISO)
              </b>
            </h2>

            <div className="flex mt-20">
              <p className="text-second w-1/2"></p>
              <article className="flex flex-col w-1/2 h-[30vh]">
                <p className="text-xl">
                  Indikran is a service company that was established in the
                  early 2000s. It is an authorised legal entity that engages in
                  the sales, refurbishment and testing of electrical products.
                </p>
                <img
                  src={getImageUrl("indikran-docs", "webp")}
                  alt="document-indikran"
                  className="w-1/2 py-4"
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

            <div className="flex mt-[10rem]">
              <p className="text-second w-1/2">PARTNERSHIPS</p>
              <article className="w-1/2">
                <h2 className="text-[2.3rem]">
                  We've formed <b className="text-prime">Valuable</b>
                </h2>
              </article>
            </div>
            <h2 className="text-[2.7rem]">
              <b className="text-prime">partnerships and collaborations</b> with
              diverse range of businesses
            </h2>
          </div>
        </section>

        <div className="w-full py-20">
          <img src={getImageUrl("partnerships", "webp")} alt="partnerships" />
        </div>

        <section>
          <div className="w-full h-[70vh] bg-[url('/src/assets/images/home-section-5.webp')] bg-cover bg-center bg-no-repeat">
            <article className="mx-20 flex h-full items-end ">
              <p className="text-white py-10 text-5xl font-light">
                Service company established since 2000
              </p>
            </article>
          </div>

          <article className="flex mx-20 mt-20 items-start">
            <h2 className="w-1/2 text-3xl">
              Need help? We’re always <br />
              <b className="text-prime">here to collaborate</b>
            </h2>
            <Link
              className="flex w-1/2 justify-end items-center"
              to="/en/contact"
            >
              <p className="underline text-prime text-xl font-light">
                Get in touch with us
              </p>
              <img
                src={getImageUrl("arrow", "webp")}
                alt="arrow"
                className="max-w-full max-h-full ms-3"
              />
            </Link>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
