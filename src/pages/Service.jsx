import React from 'react'
import { Link } from 'react-router-dom';
import getImageUrl from '../utils/imageGetter';
import Header from '../components/Header';
import Footer from '../components/Footer';
 
function Service() {
  return (
    <>
    <Header />
      <main className="hidden md:block">
        <section className="bg-shade bg-cover bg-center bg-no bg-repeat w-full">
          <div className="text-white mx-20 min-h-[50vh] items-end flex">
            <div className="flex pb-10">
              <h2 className="text-6xl font-extralight">SERVICES</h2>
              <img src={getImageUrl("arrow" , "webp")} alt="arrow" className="w-7 h-7 rotate-90 ms-2" />
            </div>
          </div>
          <img src={getImageUrl("service-section-1", "webp")} alt="indikran-workshop" className="w-full" />
        </section>

        <section>
          <div className="mx-20 h-auto min-h-screen">
            <div className="flex mt-20">
                    <p className="text-second w-1/2 font-bold">SERVICES</p>
                    <article className="flex w-1/2">
                        <p className="text-[2.5rem]">A <b className="text-prime">leading service company</b></p>
                    </article>
            </div>
            <p className="text-[2.6rem] leading-tight"><b className="text-prime">established since 2000</b> specializing <br /> in heavy machinery.</p>

            <div className="flex mt-14">
              <div className="w-1/2"></div>
              <div className="w-1/2">
                <article className="">
                  <p className="text-second text-2xl text-justify">Indikran is a service company that was established in the early 2000s.
                    It is an authorised legal entity that engages in the sales, refurbishment and testing of electrical products.</p>
                  <p className="py-10 text-justify">We started with hydraulic equipment and have expanded our professional support to the mining, earth-moving, and construction industries.</p>
                </article>
              </div>
            </div>
            

            <details className="collapse">
                <summary className="collapse text-xl font-medium border-t-2 border-x-2 mb-10 rounded-bl-none rounded-br-none border-dashed border-second">
                  <div className="w-full flex p-4 items-center">
                    <div className="w-1/2">
                      <p className="text-second">01</p>
                    </div>
                    <div className="w-1/2 flex justify-between items-center">
                      <p>Refurbishment</p>
                      <div className="flex flex-col items-center">
                        <img src={getImageUrl("arrow-2", "webp")} alt="arrow" className="w-[15px]" />
                        <p className="text-second text-[0.7rem]">ENLARGE</p>
                      </div>
                    </div>
                  </div>
                </summary>
                <div className="collapse-content flex justify-between"> 
                  <p>content</p>
                  <p>ddd</p>
                  pdddd
                </div>
            </details>
            <details className="collapse">
                <summary className="collapse text-xl font-medium border-t-2 border-x-2 mb-10 rounded-bl-none rounded-br-none border-dashed border-second">
                  <div className="w-full flex p-4 items-center">
                    <div className="w-1/2">
                      <p className="text-second">02</p>
                    </div>
                    <div className="w-1/2 flex justify-between items-center">
                      <p>Testing</p>
                      <div className="flex flex-col items-center">
                        <img src={getImageUrl("arrow-2", "webp")} alt="arrow" className="w-[15px]" />
                        <p className="text-second text-[0.7rem]">ENLARGE</p>
                      </div>
                    </div>
                  </div>
                </summary>
                <div className="collapse-content flex justify-between"> 
                  <p>content</p>
                  <p>ddd</p>
                  pdddd
                </div>
            </details>
            <details className="collapse">
                <summary className="collapse text-xl font-medium border-t-2 border-x-2 mb-10 rounded-bl-none rounded-br-none border-dashed border-second">
                  <div className="w-full flex p-4 items-center">
                    <div className="w-1/2">
                      <p className="text-second">03</p>
                    </div>
                    <div className="w-1/2 flex justify-between items-center">
                      <p>Manpower</p>
                      <div className="flex flex-col items-center">
                        <img src={getImageUrl("arrow-2", "webp")} alt="arrow" className="w-[15px]" />
                        <p className="text-second text-[0.7rem]">ENLARGE</p>
                      </div>
                    </div>
                  </div>
                </summary>
                <div className="collapse-content flex justify-between"> 
                  <p className="text-second text-xl">Our Teams are <br /> highly experienced <br /> and registered</p>
                  <p>ddd</p>
                  pdddd
                </div>
            </details>
            <details className="collapse">
                <summary className="collapse text-xl font-medium border-t-2 border-x-2 mb-10 rounded-bl-none rounded-br-none border-dashed border-second">
                  <div className="w-full flex p-4 items-center">
                    <div className="w-1/2">
                      <p className="text-second">04</p>
                    </div>
                    <div className="w-1/2 flex justify-between items-center">
                      <p>Sales</p>
                      <div className="flex flex-col items-center">
                        <img src={getImageUrl("arrow-2", "webp")} alt="arrow" className="w-[15px]" />
                        <p className="text-second text-[0.7rem]">ENLARGE</p>
                      </div>
                    </div>
                  </div>
                </summary>
                <div className="collapse-content flex justify-between"> 
                  <p>content</p>
                  <p>ddd</p>
                  pdddd
                </div>
            </details>
          </div>
        </section>

        <section className="bg-shade">
            <div className="w-full h-[70vh] bg-[url('/src/assets/images/home-section-5.webp')] bg-cover bg-center bg-no-repeat">
                <article className="mx-20 flex h-full items-end ">
                    <p className="text-white py-10 text-[3.3em] font-light">Service company established since 2000</p>
                </article>
            </div>

            <article className="flex mx-20 mt-20 items-start">
                <h2 className="w-1/2 text-3xl text-white">Need help? We’re always <br /><b className="text-second">here to collaborate</b></h2>
                <Link className="flex w-1/2 justify-end items-center" to="/en/contact">
                            <p className="underline text-xl font-light text-white">Get in touch with us</p>
                            <img src={getImageUrl("arrow", "webp")} alt="arrow" className="max-w-full max-h-full ms-3" />
                </Link>
            </article>
        </section>
      </main>
    <Footer />
    </>
  )
}

export default Service;