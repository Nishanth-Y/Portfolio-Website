import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h1>
      <div className=" container mx-auto 2xl  ">
        <div className="flex flex-col mt-7">
          <Link
            href="https://github.com/Nishanth-Y/Analyze-Death-Age-Difference-of-Right-Handers-with-Left-Handers-By-Nishanth-Y/blob/main/README.md"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-7">
              <Image src="/DataFull.jpg" height={130} width={130} alt="MOVIE" />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">
                  Death Difference Of Right Handers With Left Handers
                </p>
                <p className="text-gray-500 text-[13px]">
                  This project proposal describes a data analysis effort to look
                  at whether left-handed and right- handed people die at
                  different ages on average.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://uni-zone-deployed.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/FirstProject.jpeg"
                height={130}
                width={130}
                alt="Social Media Clown"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Uni-Zone</p>
                <p className="text-gray-500 text-[13px]">
                  Implemented a Social Media Website Clone, for college clubs
                  where club coordinator able to post updates regarding Events
                  and Activities, this application developed using Django.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://github.com/Nishanth-Y/Portfolio-Manager"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/ThridProject.jpg"
                height={130}
                width={130}
                alt="VergeSystems"
              />
              <div className=" p-3 ">
                <p className="text-white font-semibold text-xl">
                  Portfolio Manager
                </p>
                <p className="text-gray-500 text-[13px]">
                  Implemented a web application, where users can provide details
                  and a portfolio is been generated with username endpoint
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
