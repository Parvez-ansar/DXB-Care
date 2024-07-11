"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { silk_serif } from "@/fonts/fonts";
import {
  NewhomeCarImage,
  NewhomeDivingImage,
  NewhomeJetImage,
  NewhomeYatchImage,
} from "../../../../public/image";

const Experiences = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 1.4,
    slidesToScroll: 1,
    adaptiveHeight: false,
  };
  return (
    <>
      <div className="grid-cols-2 gap-8 hidden md:grid">
        <div className="col-span-1 relative rounded-xl overflow-hidden group">
          <Image src={NewhomeCarImage} alt="car" />
          <div className="group-hover:bg-opacity-50 bg-black bg-opacity-40 absolute h-full w-full inset-0 duration-500" />
          <span
            className={`text-3xl absolute duration-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 opacity-100 font-light ${silk_serif.className}`}
          >
            Sports Car
          </span>
          <p className="max-w-[90%] text-center group-hover:opacity-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-5 opacity-0 duration-500 lg:text-base md:text-xs">
            Name your dream car—Mustang, Ferrari, McLaren, Lamborghini, or
            Porsche—and it will be delivered promptly, offering high-performance
            concierge services that save you valuable time by eliminating long
            waits in the booking process.
          </p>
        </div>
        <div className="col-span-1 relative rounded-xl overflow-hidden group">
          <Image src={NewhomeJetImage} alt="jet" />
          <div className="group-hover:bg-opacity-50 bg-black bg-opacity-40 absolute h-full w-full inset-0 duration-500" />
          <span
            className={`text-3xl absolute duration-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 opacity-100 font-light ${silk_serif.className}`}
          >
            Private Jet
          </span>
          <p className="max-w-[90%] text-center group-hover:opacity-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-5 opacity-0 duration-500 lg:text-base md:text-xs">
            Unlock the freedom to fly on your terms. With the private jets,
            you’re not just traveling; you’re making a statement of refined
            taste and discerning choice, all while saving valuable time.
          </p>
        </div>
        <div className="col-span-1 relative rounded-xl overflow-hidden group">
          <Image src={NewhomeYatchImage} alt="Yatch" />
          <div className="group-hover:bg-opacity-50 bg-black bg-opacity-40 absolute h-full w-full inset-0 duration-500" />
          <span
            className={`text-3xl absolute duration-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 opacity-100 font-light ${silk_serif.className}`}
          >
            Yatch
          </span>
          <p className="max-w-[90%] text-center group-hover:opacity-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-5 opacity-0 duration-500 lg:text-base md:text-xs">
            Sail with elegance, power, and strength. Enjoy smooth voyages while
            chasing sunsets, hosting parties, or exploring peaceful coves. Our
            rental yacht service is tailored to meet your unique preferences,
            offering customizable experiences for every occasion, ensuring your
            maritime adventures are exactly as you envision.
          </p>
        </div>
        <div className="col-span-1 relative rounded-xl overflow-hidden group">
          <Image src={NewhomeDivingImage} alt="diving" />

          <div className="group-hover:bg-opacity-50 bg-black bg-opacity-40 absolute h-full w-full inset-0 duration-500" />
          <span
            className={`text-3xl absolute duration-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 opacity-100 font-light ${silk_serif.className}`}
          >
            Sky Dive
          </span>
          <p className="max-w-[90%] text-center group-hover:opacity-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-5 opacity-0 duration-500 lg:text-base md:text-xs">
            Take the leap from the plane, embrace the weightlessness, feel the
            adrenaline rush through your veins, and dance in the air with
            breathtaking views. Life's too short to handle mundane tasks - we've
            got you covered.
          </p>
        </div>
      </div>
      <div className="-mx-6 md:hidden">
        <Slider {...settings}>
          <div className="px-1">
            <div className="col-span-2 relative rounded-xl overflow-hidden ">
              <Image src={NewhomeCarImage} alt="car" />
              <div className="absolute w-full h-full inset-0 bg-black bg-opacity-40 hover:bg-opacity-50 duration-300 flex justify-center items-center">
                <span className="text-2xl font-light">Sports Car</span>
              </div>
            </div>
          </div>
          <div className="px-1">
            <div className="col-span-1 relative rounded-xl overflow-hidden ">
              <Image src={NewhomeJetImage} alt="jet" />
              <div className="absolute w-full h-full inset-0 bg-black bg-opacity-40 hover:bg-opacity-50 duration-300 flex justify-center items-center">
                <span className="text-2xl font-light">Private Jet</span>
              </div>
            </div>
          </div>
          <div className="px-1">
            <div className="col-span-1 relative rounded-xl overflow-hidden ">
              <Image src={NewhomeYatchImage} alt="Yatch" />
              <div className="absolute w-full h-full inset-0 bg-black bg-opacity-40 hover:bg-opacity-50 duration-300 flex justify-center items-center">
                <span className="text-2xl font-light">Yatch</span>
              </div>
            </div>
          </div>
          <div className="px-1">
            <div className="col-span-1 relative rounded-xl overflow-hidden ">
              <Image src={NewhomeDivingImage} alt="diving" />
              <div className="absolute w-full h-full inset-0 bg-black bg-opacity-40 hover:bg-opacity-50 duration-300 flex justify-center items-center">
                <span className="text-2xl font-light">Sky Dive</span>
              </div>
            </div>
          </div>
          <div />
        </Slider>
      </div>
    </>
  );
};

export default Experiences;
