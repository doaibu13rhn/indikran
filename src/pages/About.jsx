import React from "react";
import { Link } from "react-router-dom";
import getImageUrl from "../utils/imageGetter";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-cover bg-center bg-no bg-repeat w-full">
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

        <section>
          <div className="md:mx-20 mx-8 min-h-screen h-auto">
            <div className="flex mt-20">
              <p className="text-second md:w-1/2 font-bold">ABOUT US</p>
              <article className="flex w-1/2">
                <p className="text-[2.2rem]">
                  <b className="text-prime">We pioneer the future </b>with
                </p>
              </article>
            </div>
            <p className="text-[2.6rem] leading-tight">
              an<b className="text-prime"> efficient solutions</b> specializing{" "}
              <br /> in heavy machinery.
            </p>

            <div className="flex mt-14">
              <div className="w-1/2"></div>
              <div className="w-1/2">
                <article className="">
                  <p className="text-second text-2xl text-justify">
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

        <section className="bg-[url('/src/assets/images/cover-white.webp')] bg-center bg-cover bg-no-repeat">
          <div className="mx-20 min-h-screen h-auto">
            <div className="flex mt-20">
              <p className="text-second w-1/2 font-bold">
                Leading the way to <br /> provide best solutions
              </p>
              <article className="flex w-1/2">
                <p className="text-[3.5rem] font-thin">VISION</p>
              </article>
            </div>

            <div className="flex mt-14">
              <div className="w-1/2"></div>
              <div className="w-1/2">
                <article className="">
                  <p className="text-second text-4xl">
                    “Enhancing these services consistently and maintaining high
                    quality work”
                  </p>
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
          <div className="w-full h-full flex">
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
        <section>
          <div className="mx-20 h-auto min-h-screen">
            <div className="flex mt-20">
              <p className="text-second w-1/2 font-bold">
                PROCESS OF WORK <br /> BEST FOR YOUR NEEDS
              </p>
              <article className="flex w-1/2">
                <p className="text-[3.5rem] font-thin">MISSION</p>
              </article>
            </div>

            <div className="flex mt-14">
              <div className="w-1/2"></div>
              <div className="w-1/2">
                <article className="">
                  <p className="text-second text-4xl">
                    “Deliver a satisfactory work service to our clients”
                  </p>
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

            <div className="flex mt-20">
              <p className="text-second w-1/2 font-bold">PROGRESS</p>
              <article className="flex w-1/2">
                <p className="text-[2.2rem]">
                  Our team <b className="text-prime">delivers solutions</b>
                </p>
              </article>
            </div>
            <p className="text-[2.6rem] leading-tight">
              that<b className="text-prime"> help our clients optimezed</b>{" "}
              their <br />{" "}
              <b className="text-prime">manufacturing operations</b>
            </p>

            <article className="w-full py-10 flex">
              <div className="w-1/2">
                <div className="flex-col">
                  <p>PROJECTS</p>
                  <p className="font-bold text-[4rem]">1,000+</p>
                </div>
              </div>
              <div className="w-1/2 flex justify-between">
                <div className="flex-col">
                  <p>WAREHOUSE</p>
                  <p className="font-bold text-[4rem]">2</p>
                </div>
                <div className="flex-col">
                  <p>OURTEAM</p>
                  <p className="font-bold text-[4rem]">105</p>
                  <p className="text-[0.7rem]">AND STILL GROWING</p>
                </div>
                <div className="flex-col">
                  <p>PARTNERS</p>
                  <p className="font-bold text-[4rem]">2</p>
                </div>
              </div>
            </article>

            <Link className="flex items-center gap-x-2">
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
            className="py-7"
          />
        </section>

        <section>
          <div className="mx-20">
            <div className="flex mt-14">
              <div className="w-1/2"></div>
              <div className="w-1/2">
                <article className="flex">
                  <p className="text-second">CERTIFICATION</p>
                  <p className="ms-[9rem] text-[2rem]">Registered and</p>
                </article>
                <p className="text-[1.8rem]">
                  acknowledge by the{" "}
                  <b className="text-prime">
                    International <br />
                    Organization for Standardization <br />
                    (ISO)
                  </b>
                </p>

                <div className="certificate">
                  <div className="w-full flex justify-between items-center border-b-2 border-prime border-dashed">
                    <img
                      src={getImageUrl("certificate", "webp")}
                      alt="indikran-document"
                    />
                    <p>Lorem ipsum dolor sit amet.</p>
                    <div className="download flex items-center">
                      <p className="text-prime me-5">download</p>
                      <img
                        src={getImageUrl("arrow-2", "webp")}
                        alt="arrow-download"
                        className="w-[15px]"
                      />
                    </div>
                  </div>

                  <div className="w-full flex justify-between items-center border-b-2 border-prime border-dashed">
                    <img
                      src={getImageUrl("certificate", "webp")}
                      alt="indikran-document"
                    />
                    <p>Lorem ipsum dolor sit amet.</p>
                    <div className="download flex items-center">
                      <p className="text-prime me-5">download</p>
                      <img
                        src={getImageUrl("arrow-2", "webp")}
                        alt="arrow-download"
                        className="w-[15px]"
                      />
                    </div>
                  </div>

                  <div className="w-full flex justify-between items-center border-b-2 border-prime border-dashed">
                    <img
                      src={getImageUrl("certificate", "webp")}
                      alt="indikran-document"
                    />
                    <p>Lorem ipsum dolor sit amet.</p>
                    <div className="download flex items-center">
                      <p className="text-prime me-5">download</p>
                      <img
                        src={getImageUrl("arrow-2", "webp")}
                        alt="arrow-download"
                        className="w-[15px]"
                      />
                    </div>
                  </div>

                  <div className="w-full flex justify-between items-center border-b-2 border-prime border-dashed">
                    <img
                      src={getImageUrl("certificate", "webp")}
                      alt="indikran-document"
                    />
                    <p>Lorem ipsum dolor sit amet.</p>
                    <div className="download flex items-center">
                      <p className="text-prime me-5">download</p>
                      <img
                        src={getImageUrl("arrow-2", "webp")}
                        alt="arrow-download"
                        className="w-[15px]"
                      />
                    </div>
                  </div>

                  <div className="w-full flex justify-between items-center border-b-2 border-prime border-dashed">
                    <img
                      src={getImageUrl("certificate", "webp")}
                      alt="indikran-document"
                    />
                    <p>Lorem ipsum dolor sit amet.</p>
                    <div className="download flex items-center">
                      <p className="text-prime me-5">download</p>
                      <img
                        src={getImageUrl("arrow-2", "webp")}
                        alt="arrow-download"
                        className="w-[15px]"
                      />
                    </div>
                  </div>

                  <div className="w-full flex justify-between items-center border-b-2 border-prime border-dashed">
                    <img
                      src={getImageUrl("certificate", "webp")}
                      alt="indikran-document"
                    />
                    <p>Lorem ipsum dolor sit amet.</p>
                    <div className="download flex items-center">
                      <p className="text-prime me-5">download</p>
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

        <div className="mx-20">
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

        <div className="w-full py-20">
          <img src={getImageUrl("partnerships", "webp")} alt="partnerships" />
        </div>

        <section className="bg-shade">
          <div className="w-full h-[70vh] bg-[url('/src/assets/images/home-section-5.webp')] bg-cover bg-center bg-no-repeat">
            <article className="mx-20 flex h-full items-end ">
              <p className="text-white py-10 text-5xl font-light">
                Service company established since 2000
              </p>
            </article>
          </div>

          <article className="flex mx-20 mt-20 items-start">
            <h2 className="w-1/2 text-3xl text-white">
              Need help? We’re always <br />
              <b className="text-second">here to collaborate</b>
            </h2>
            <Link
              className="flex w-1/2 justify-end items-center"
              to="/en/contact"
            >
              <p className="underline text-white text-xl font-light">
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

export default About;
