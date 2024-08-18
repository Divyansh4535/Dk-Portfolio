import React, { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import Bouncingword from "../Components/Bouncingword";
import ProjectCard from "../Components/ProjectCard";

const Work = () => {
  
  // const [projectTab, setProjectTab] = useState("official");
  // const officialProject = [
  //   {
  //     title: "Time Ascent",
  //     summary: "Times Ascent, a part of The Times of India, is focused on career enhancement, jobs, upskill courses, latest events, trending news, remote work, human resource, free resume maker, psychometric tests, interview tips- timesascent.com",
  //     url: "https://timesascent.com/",
  //     // image: "https://timesascent.com/times_ascent_logo.svg"
  //     image: "./static/images/times_ascent.png"
  //   },
  //   {
  //     title: "Education Times",
  //     summary: "Part of Times of India focused on education, counsellors, Q&A, education fair and placement reports. Top career site - Educationtimes.com",
  //     url: "https://et.onecorp.co.in/",
  //     image: "./static/images/education_times.jpg"
  //     // image: "https://et.onecorp.co.in/Education%20Times.com%20beta%20Logo.svg"
  //   },
  //   {
  //     title: "Aviral Times",
  //     summary: "Aviraltimes.com is a digital wing of the Hindi weekly newspaper - Aviral Times. It is the most reliable and authentic news website.",
  //     url: "https://www.aviraltimes.com/",
  //     image: "./static/images/aviral_times.png"
  //     // image: "https://www.aviraltimes.com/AviralLogo.svg"
  //   },
  //   {
  //     title: "Rozgaar India",
  //     summary: "Rozgaar India is a website made for people to get on-site, hybrid or remote jobs with the best compatibility they want or need.",
  //     url: "https://www.rozgaarindia.com/",
  //     image: "./static/images/rozgaar_india.jpg"
  //     // image: "https://www.rozgaarindia.com/assets/IPassets/Rozgaar_Black_Logo.svg"
  //   }
  // ];
  // const personalProject = [
  //   {
  //     title: "Anonymous Chatter",
  //     summary: "A chatting web application with some enhance feature.... Coming soon...!",
  //     // url:"https://et.onecorp.co.in/",
  //     image: "./static/images/iChat-logo_new.png"
  //   },
  // ];

  const myProjects = [{
    title: "Snake Game",
    summary: "this is snake game "
    , url: "https://snake-game-virid-iota.vercel.app/",
    image: "./static/images/snake-game.png"
  },
  {
    title: "Tik-Tok-Tak",
    summary: "this is tik-tok-tak game",
    url: "https://tic-tac-toe-game-tawny-nine.vercel.app/",
    image: "./static/images/ttt.png"
  },
  {
    title: "Bubble Game",
    summary: "this is Bubble game",
    url: "https://bubble-game-bay.vercel.app/",
    // image: "./static/images/ttt.png"
  }
  ]


  const [loading, setLoading] = useState(true);

  const textBounce = (e) => {
    e.target.classList.add("blast");
    setTimeout(() => {
      e.target.classList.remove("blast");
    }, 1000);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section className="w-full relative">
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col px-14 md:px-20 pt-4">
          <div className="flex flex-col">
            <h1 className="text-[#14d9d8] text-[45px] md:text-[60px] flex font-semibold">
              {[
                "M", "y", "P", "r", "o", "j", "e", "c", "t"
              ].map((letter, index) => (
                <Bouncingword
                  key={index}
                  text={letter}
                  textClass={`drop-shadow-[1px_1px_50px_rgba(20,217,216,0.5)] select-none cursor-pointer flex ${letter === "P" && "ml-3"
                    }`}
                  onMouseEnter={(e) => {
                    textBounce(e);
                  }}
                />
              ))}
            </h1>
            <div className="flex flex-col mt-4">
              <ul className="flex justify-start">
                {/* <li className={`list-none text-xl font-hind text-slate-50 font-semibold mr-5 tracking-wide cursor-pointer relative after:content-[''] after:absolute after:bottom-0 after:left-0 ${projectTab === "official" ? "after:w-full" : "after:w-0"} after:h-0.5 after:bg-[#14d9d8] after:rounded-lg transition-all duration-300 ease-in-out`} onClick={()=>{setProjectTab("official")}}>
                My Project 
              </li> */}
                {/* <li className={`list-none text-xl font-hind text-slate-50 font-semibold mr-5 tracking-wide cursor-pointer relative after:content-[''] after:absolute after:bottom-0 after:left-0 ${projectTab === "personal" ? "after:w-full" : "after:w-0"} after:h-0.5 after:bg-[#14d9d8] after:rounded-lg transition-all duration-300 ease-in-out`} onClick={()=>{setProjectTab("personal")}}>
              Personal
              </li> */}
              </ul>
              <div className="w-full h-full mt-0 md:mt-4 flex flex-col justify-center lg:justify-center md:flex-row  items-center flex-wrap   ">
                {myProjects.map((item, index) => (
                  <div className="md:mr-8 mt-8" key={index}>
                    <ProjectCard data={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
