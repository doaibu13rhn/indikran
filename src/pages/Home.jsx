import { Link } from "react-router-dom";
import getImageUrl from "../utils/imageGetter";
import Header from "../components/header";

function Home() {

  return (
    <>
      <Header />
      <main>
        <section className="bg-[url('/src/assets/images/main-section.webp')] bg-cover bg-center bg-no-repeat w-full">
            <div className="flex mx-20 min-h-[100vh] text-white items-end">
                <article className="w-full h-[25vh] mb-1">
                    <p className="text-[4rem] leading-none flex-1 justify-center"><b>An effecient approach</b><br />specializing in <b>heavy machinery</b></p>
                </article>
            </div>
        </section>

        <section className="bg-[url('/src/assets/images/cover-blue.webp')] bg-cover bg-center bg-no-repeat w-full">
            <div className="mx-20 border-8 border-white h-auto min-h-[100vh]">
                <div className="flex mt-10">
                    <p className="text-second w-1/2">About us</p>
                    <article className="flex flex-col w-1/2 h-[30vh]">
                        <p className="text-white text-justify text-xl">Indikran is a service company that was established in the early 2000s. It is an authorised legal entity that engages in the sales, refurbishment and testing of electrical products.</p>
                        <Link className="flex mt-12 items-center" to="/en/about-us">
                            <p className="text-white underline">Learn More</p>
                            <img src={getImageUrl("arrow", "webp")} alt="arrow" className="max-w-full max-h-full ms-3" />
                        </Link>
                    </article>
                </div>

                <div className="flex mt-[10em]">
                    <p className="text-second w-1/2">Services</p>
                    <article className="flex w-1/2 h-[30vh]">
                        <h2 className="text-white text-justify text-5xl">Our service </h2>
                        <h2 className="text-second text-5xl ms-2 font-bold">business</h2>
                    </article>
                </div>
                <h2 className="text-white text-5xl"><b className="text-second">capabilities</b> with an <b className="text-second">effecient operational</b> and <b className="text-second">adaptable solutions</b></h2>
            </div>
        </section>
      </main>
    </>
  );
}

export default Home;
