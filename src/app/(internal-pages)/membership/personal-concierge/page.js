import Image from "next/image";
import React from "react";
import CorporateSlider from "./components/CorporateSlider";
import Link from "next/link";
import { NewPersonlBanner } from "../../../../../public/image";

const PersonalConcierge = () => {
  return (
    <div className="flex flex-col">
      <section className="-mx-[5.5%] relative">
        <Image
          src={NewPersonlBanner}
          alt="banner"
          className="aspect-[5/2] object-cover w-full"
        />
        <div className="absolute top-1/2 -translate-y-1/2 w-full px-8 md:block hidden">
          <p className=" italic  text-3xl font-medium text-center">
            Experience the best in personal concierge services. No matter the
            detail, DXB Care makes your priorities our priority.
          </p>
        </div>
      </section>
      <section className="py-4 md:py-8 flex flex-col md:gap-6 gap-3">
        <p className="md:text-2xl text-xs font-light text-center">
          At DXB Care, whether you&apos;re planning a luxurious vacation, need
          everyday assistance, or want help with event planning, health and
          wellness, financial and legal services, luxury gifting, hassle-free
          travel, or even a private chef - we&apos;ve got you covered. We handle
          everything from simple requests to intricate plans with a single text.
        </p>
        <CorporateSlider />
      </section>

      <section className="flex flex-col gap-6 md:py-10 py-4">
        <Link
          href="/contact-us"
          className="bg-white text-black py-1 px-2 sm:py-3 sm:px-4 text-xs sm:text-xl font-semibold rounded-full self-center"
        >
          Contact us
        </Link>
      </section>
    </div>
  );
};

export default PersonalConcierge;
