"use client";

import Image from "next/image";
import Slider from "react-slick";
import { silk_serif } from "@/fonts/fonts";
import {
  NewBbqDiningImage,
  NewCamelTourImage,
  NewChildCareImage,
  NewEventImage,
  NewGyrocopterFlightImage,
  NewHeathcareImage,
  NewJetImage,
  NewJetskiImage,
  NewJumbaImage,
  NewLuxeShoppingImage,
  NewLuxuryCarImage,
  NewMeditationImage,
  NewPartiesImage,
  NewPersonalAssistImage,
  NewPetCareImage,
  NewProposalImage,
  NewQuadBikingImage,
  NewScubaDivingImage,
  NewShootingImage,
  NewSpaImage,
  NewSunsetImage,
  NewWeb3Image,
  NewYatchImage,
  NewYogaImage,
} from "../../../../public/image";

const pageData = [
  {
    title: "Luxe Experience",
    data: [
      { image: NewLuxuryCarImage, label: "Luxury Car" },
      { image: NewYatchImage, label: "Yatch" },
      { image: NewLuxeShoppingImage, label: "Luxe Shopping" },
      { image: NewJetImage, label: "Private Jet" },
    ],
  },
  {
    title: "Adventure Sports",
    data: [
      { image: NewShootingImage, label: "Shooting" },
      { image: NewJetskiImage, label: "Jet Ski" },
      { image: NewScubaDivingImage, label: "Scuba Diving" },
      { image: NewGyrocopterFlightImage, label: "Gyrocopter Flight" },
    ],
  },
  {
    title: "Desert Saffari",
    data: [
      { image: NewBbqDiningImage, label: "BBQ Dinner" },
      { image: NewQuadBikingImage, label: "Quad Biking" },
      { image: NewCamelTourImage, label: "Camel Riding" },
      { image: NewSunsetImage, label: "Sunset Pictures" },
    ],
  },
  {
    title: "Family Care",
    data: [
      { image: NewChildCareImage, label: "Child Care" },
      { image: NewPersonalAssistImage, label: "Personal Assistance" },
      { image: NewPetCareImage, label: "Pet Care" },
      { image: NewHeathcareImage, label: "Health Care" },
    ],
  },
  {
    title: "Health & Wellness",
    data: [
      { image: NewMeditationImage, label: "Yoga" },
      { image: NewSpaImage, label: "Spa" },
      { image: NewJumbaImage, label: "Aerobics/Jumba" },
      { image: NewYogaImage, label: "Meditation" },
    ],
  },
  {
    title: "Events Management",
    data: [
      { image: NewWeb3Image, label: "Web3 Events" },
      { image: NewProposalImage, label: "Proposals" },
      { image: NewPartiesImage, label: "Parties Access" },
      { image: NewEventImage, label: "Special Events" },
    ],
  },
];

export default function Page() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    // autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          // initialSlide: 2,
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
    <main className="flex flex-col md:gap-16 gap-8 pt-12">
      {pageData.map((slide) => (
        <div key={slide.title} className="flex flex-col md:gap-10 gap-4">
          <h3
            className={`${silk_serif.className} text-center font-medium md:text-5xl text-2xl`}
          >
            {slide.title}
          </h3>
          <Slider {...settings}>
            {slide.data.map((card, i) => {
              return (
                <div key={i} className="p-1.5 sm:p-3">
                  <div className="card-1 duration-300 relative rounded-2xl overflow-hidden">
                    <Image src={card.image} alt={card.label} loading="lazy" />
                    <div className="absolute w-full h-full flex inset-0 justify-center items-center bg-black bg-opacity-25">
                      <span className="md:text-3xl sm:text-2xl text-lg italic text-center inline-block">
                        {card.label}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      ))}
    </main>
  );
}
