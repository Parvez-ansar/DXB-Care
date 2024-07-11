"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import {
  NewEventImage,
  NewPartiesImage,
  NewProposalImage,
  NewWeb3Image,
} from "../../../../../../public/image";

const CorporateSlider = () => {
  const slideData = [
    { image: NewWeb3Image, label: "Web3 Events" },
    { image: NewProposalImage, label: "Proposals" },
    { image: NewPartiesImage, label: "Parties Access" },
    { image: NewEventImage, label: "Special Events" },
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3.2,
          slidesToScroll: 2,
          initialSlide: 0,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {slideData.map((card, i) => {
        return (
          <div key={i} className="p-1.5 sm:p-3">
            <div className="card-1 duration-300 relative rounded-2xl overflow-hidden">
              <Image src={card.image} alt={card.label} loading="lazy" />
              <div className="absolute w-full h-full flex inset-0 justify-center items-center bg-black bg-opacity-25">
                <span className="lg:text-3xl md:text-xl sm:text-lg text-base italic text-center inline-block">
                  {card.label}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default CorporateSlider;
