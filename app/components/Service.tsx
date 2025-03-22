import { assets, serviceData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Service = () => {
  return (
    <div id="service" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What I offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I am a front-end web developer.
      </p>
      <div className="grid grid-cols-(--autofit-cols-200) gap-6 my-10">
        {serviceData.map((service, index) => (
          <div
            key={index}
            className="
            border-[0.5px] border-gray-400 p-6 rounded-xl cursor-pointer hover:bg-lightHover
             hover:-translate-y-1 hover:shadow-black duration-500"
          >
            <Image
              src={service.icon}
              width={0}
              height={0}
              alt="service-icon"
              className="w-10"
            />
            <h3 className="my-4 text-gray-700 text-lg">{service.title}</h3>
            <p className="text-sm text-gray-600 leading-5">
              {service.description}
            </p>
            <Link
              href={service.link}
              className="flex items-center gap-2 text-sm mt-5"
            >
              Read more
              <Image
                className="w-4"
                src={assets.right_arrow}
                width={0}
                height={0}
                alt="right-arrow"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
