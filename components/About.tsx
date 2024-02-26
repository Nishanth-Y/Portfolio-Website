import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <br />
        <p className="text-gray-300 text-center ">
          I am Nishant from Bangalore. I hold a bachelors degree in Computer
          Science from BMSIT . In terms of soft skills, Im optimistic,
          self-confident, and hardworking. My technical skills include
          proficiency in Python, Java, C/C++ programming, Javascript, and MS
          Excel. Coming to my achievements, I worked as chief technical lead for
          our college fest Utsaha Vaibhav 2023. Outside of work, I enjoy Movies,
          internet surfing, badminton .
          <br />
        </p>
      </div>
    </section>
  );
};

export default About;
