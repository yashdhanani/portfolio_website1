import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Data Scientist
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  FingerTips
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2023 
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                During my tenure at Fingertips, a pioneering data-driven company, I honed my data science skills. 
                I was part of a dynamic team that employed data to unearth insights and inform strategic decisions.My role encompassed predictive modeling, data pipeline optimization, and comprehensive analyses. 
                Working across departments, I helped tackle intricate business challenges. Fingertips provided a 
                stimulating environment, keeping me at the cutting edge of data science. This experience has fueled 
                my passion and readiness to tackle new data challenges and deliver impactful results.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  B.Tech, Information Technology
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Aditya Silver Oak
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2021 - Year 2025
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                I'm a data scientist with a B.Tech in Information Technology. My academic journey combined technology and data analysis, 
                covering programming, databases, web development, and cybersecurity. Beyond the classroom, I pursued hands-on projects and 
                internships, gaining practical experience in solving real-world data challenges. Armed with this knowledge, I'm eager to 
                leverage my skills to extract valuable insights from data and contribute to data-driven decision-making in the ever-evolving 
                tech landscape.

                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
