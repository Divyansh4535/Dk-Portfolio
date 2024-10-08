import React, { useState, useEffect } from "react";
import Bouncingword from "../Components/Bouncingword";
import Loading from "../Components/Loading";
import Scrollbounce from "../Components/ScrollBouce";
import About from "./About";
import Skill from "./Skill";
import Contact from "./Contact";

const Home = (props) => {

  const [loading, setLoading] = useState(true);
  const [pageLast, setPageLast] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const textBounce = (e) => {
    e.target.classList.add("blast");
    setTimeout(() => {
      e.target.classList.remove("blast");
    }, 1000);
  };

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 2500) {
      setPageLast(true)
    } else {
      setPageLast(false)
    }
  })

  return (
    <section className="w-full relative ">
      {loading ? (
        <Loading />
      ) : (
        <>
          {pageLast === false && <>
            <span
              className={`fixed bottom-4 ${props.open === true ? "left-36" : "left-0"
                } md:left-36`}
            >
              <Scrollbounce text="Scroll Down" textClass="text-white" />
            </span>
            <span className="fixed bottom-4 right-0">
              <Scrollbounce text="Scroll Down" textClass="text-white" />
            </span>
          </>}
          <div className="w-full h-[600px] sm:h-screen flex items-center anim-bg">
            <div className="light x1"></div>
            <div className="light x2"></div>
            <div className="light x3"></div>
            <div className="light x4"></div>
            <div className="light x5"></div>
            <div className="light x6"></div>
            <div className="light x7"></div>
            <div className="light x8"></div>
            <div className="light x9"></div>

            <div className="sm:w-2/3 w-full flex flex-col justify-around sm:mb-0 ml-0 sm:ml-10 md:ml-20 items-center sm:items-start">
              <h1 className="text-slate-50 text-[40px] min-[450px]:text-[55px] sm:text-[60px] md:text-[80px] sm:leading-[60px] leading-[45px] md:leading-[80px] font-paytone my-1.5 font-thin flex">
                {["H", "e", "y", ","].map((letter, index) => (
                  <Bouncingword
                    text={letter}
                    key={index}
                    textClass={`hover:text-[#14d9d8] drop-shadow-[1px_1px_50px_rgba(20,217,216,0.5)]  select-none cursor-pointer wp1 `}
                    onMouseEnter={(e) => {
                      textBounce(e);
                    }}
                  />
                ))}
              </h1>
              <h1 className="text-slate-50 text-[40px] min-[450px]:text-[55px] sm:text-[60px] md:text-[80px] sm:leading-[60px] leading-[45px] md:leading-[80px] font-paytone my-1.5 font-thin flex">
                {["I", "'", "m", "D", "i", "v", "y", "a", "n", "s", "h", "u"].map((letter, index) => (
                  <Bouncingword
                    text={letter}
                    key={index}
                    textClass={`hover:text-[#14d9d8] drop-shadow-[1px_1px_50px_rgba(20,217,216,0.5)] wp1 select-none cursor-pointer ${letter === "D" && "ml-4"
                      }`}
                    onMouseEnter={(e) => {
                      textBounce(e);
                    }}
                  />
                ))}
              </h1>
              <h1 className="text-slate-50 text-[40px] min-[450px]:text-[55px] sm:text-[60px] md:text-[80px] sm:leading-[60px] leading-[45px] md:leading-[80px] font-paytone my-1.5 font-thin flex">
                {[
                  "W",
                  "e",
                  "b",
                  "D",
                  "e",
                  "v",
                  "e",
                  "l",
                  "o",
                  "p",
                  "e",
                  "r",
                ].map((letter, index) => (
                  <Bouncingword
                    text={letter}
                    key={index}
                    textClass={`hover:text-[#14d9d8] drop-shadow-[1px_1px_50px_rgba(20,217,216,0.5)] select-none cursor-pointer wp1 ${letter === "D" && "ml-4"
                      }`}
                    onMouseEnter={(e) => {
                      textBounce(e);
                    }}
                  />
                ))}
              </h1>
              <p className="text-gray-500 mt-5 tracking-widest text-[13px] min-[450px]:text-[16px] sm:text-lg font-medium">
                Front End Developer
              </p>
              <div className="flex gap-5 mt-5">
                <a
                  href="/static/media/resume.html"
                  className="py-2 px-4 sm:py-3 sm:px-8 bg-transparent text-white border-b-[#189494] bg-[#14d9d8] hover:text-[#1d1d1d] flex items-center justify-center text-xl font-medium rounded-lg cursor-pointer font-hind tracking-wider transition-all border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[4px] active:translate-y-[2px]"
                  // download
                >
                  Resume
                </a>
                <a
                  href="/contact"
                  className="py-2 px-4 sm:py-3 sm:px-8 bg-transparent text-white  border-b-[#189494] bg-[#14d9d8] hover:text-[#1d1d1d] flex items-center justify-center text-xl font-medium rounded-lg cursor-pointer font-hind tracking-wider  transition-all border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[4px]  active:translate-y-[2px]"
                >
                  Hire me
                </a>
              </div>
            </div>
          </div>
          <div className="w-full mt-0 pt-0 pb-10">
            <About />
          </div>
          <div className="w-full pb-5 pt-10">
            <Skill />
          </div>
          <div className="w-full py-20">
            <Contact />
          </div>
        </>
      )}
    </section>
  );
};

export default Home;
