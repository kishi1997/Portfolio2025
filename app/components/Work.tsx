import { assets, workData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import Link from "next/link";

type WorkProps = {
  isDarkMode: boolean;
};

const Work = ({ isDarkMode }: WorkProps) => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My Portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my portfolio! I am a front-end web developer.
      </p>
      <div className="grid grid-cols-(--autofit-cols-200) gap-5 my-10 dark:text-black">
        {workData.map((work, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${work.bgImage})` }}
            className="aspect-square bg-no-repeat relative bg-cover bg-center group border-[0.5px] border-gray-400 p-6 rounded-xl cursor-pointer"
          >
            <div
              className="bg-white w-10/12 rounded-md absolute bottom-5
             left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7"
            >
              <div>
                <h2 className="font-semibold">{work.title}</h2>
                <p className="text-sm text-gray-700">{work.description}</p>
              </div>
              <div
                className="aspect-square border rounded-full border-black w-9 flex 
                items-center justify-center shadow-[2px_2px_0_0] group-hover:bg-lime-300 transition"
              >
                <Image
                  src={assets.send_icon}
                  width={0}
                  height={0}
                  alt="send-icon"
                  className="w-5"
                />
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
      <Link
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px]
       border-gray-700 p-6 rounded-full py-3 px-10 mx-auto duration-500 hover:bg-lightHover 
       hover:-translate-y-1 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        show more
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="right arrow"
          width={0}
          height={0}
          className="w-5"
        />
      </Link>
    </div>
  );
};

export default Work;
