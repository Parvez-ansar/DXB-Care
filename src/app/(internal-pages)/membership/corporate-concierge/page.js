import Image from "next/image";
import React from "react";

import CorporateSlider from "./components/CorporateSlider";
import Link from "next/link";
import { silk_serif } from "@/fonts/fonts";
import {
  NewCompanyMembershipImage,
  NewCorpoarteBannerImage,
  NewEmployeeMembershipImage,
  NewfounderMembershipImage,
} from "../../../../../public/image";

const CorporateConcierge = () => {
  return (
    <div className="flex flex-col">
      <section className="-mx-[5.5%] relative">
        <Image
          src={NewCorpoarteBannerImage}
          alt="banner"
          className="aspect-[5/2] object-cover w-full"
        />
        <div className="absolute top-1/2 -translate-y-1/2 w-full px-8 block">
          <p
            className={`${silk_serif.className} italic lg:text-3xl md:text-xl sm:text-base text-[10px] leading-snug font-medium text-center`}
          >
            Elevating the corporate experience through exceptional service and
            unparalleled attention to detail, we transform everyday tasks into
            extraordinary moments of efficiency and sophistication.
          </p>
        </div>
      </section>
      <section className="py-4 md:py-8 flex flex-col md:gap-6 gap-3">
        <h4
          className={`${silk_serif.className} md:text-6xl text-2xl font-medium md:font-semibold text-center`}
        >
          Corporate Concierge
        </h4>
        <p className="md:text-2xl text-xs font-light text-center">
          Welcome to DXB Care&apos;s Corporate Concierge Services! Trust and
          security are at the heart of everything we do. We build strong client
          relationships, enhance your company&apos;s reputation, and manage
          personal tasks with customized solutions. Imagine having a dedicated
          team to handle all the details, so you can focus on what you do best.
          Whether it&apos;s office support, Dubai residency, business setup,
          legal advice, event planning, or personalized travel arrangements -
          just text us and consider it done. We also offer executive assistance,
          employee wellness programs, client hospitality, and team-building
          activities tailored to your corporate needs. At DXB Care, we simplify
          your corporate life, allowing you to succeed effortlessly. We&apos;re
          not just a service; we&apos;re your partner in success. Let&apos;s
          make your business thrive, one task at a time.
        </p>
        <CorporateSlider />
      </section>
      <section className="grid grid-cols-10  md:gap-16 gap-3 self-center md:py-14 py-8">
        <h5
          className={`${silk_serif.className} text-xl col-span-11 font-semibold text-center md:hidden`}
        >
          Corporate Memebrship
        </h5>
        <div className="col-span-4 relative">
          <Image
            src={NewCompanyMembershipImage}
            alt="corporate"
            className="h-full w-full object-cover rounded-3xl"
          />
          <div className="absolute w-full h-full bg-black bg-opacity-45 inset-0 rounded-3xl" />
        </div>
        <div className="col-span-6 flex flex-col justify-center gap-3">
          <h5
            className={`${silk_serif.className} text-4xl font-semibold text-center md:block hidden`}
          >
            Corporate Memebrship
          </h5>
          <p className="md:text-3xl text-[10px] font-light">
            Experience the ultimate in corporate concierge services with DXB
            Care. Our extensive network caters to all your business needs,
            including office support, Dubai residency, business setup, legal
            advisory, event management, and tailored travel solutions. Our
            commitment to excellence ensures seamless operations for your
            business. With just a single text, we handle it all, ensuring you
            stay focused on what matters most. Simplify your business journey
            with us and thrive effortlessly.
          </p>
        </div>
        <h5
          className={`${silk_serif.className} text-xl col-span-11 font-semibold text-center md:hidden`}
        >
          Founder Memebrship
        </h5>
        <div className="col-span-6 flex flex-col justify-center gap-3">
          <h5
            className={`${silk_serif.className} text-4xl font-semibold text-center md:block hidden`}
          >
            Founder Memebrship
          </h5>
          <p className="md:text-3xl text-[10px] font-light">
            Introducing DXB Care&apos;s Founder&apos;s Membership: your ultimate
            blend of personal assistance and corporate support. We manage
            calendars, set reminders, and handle every detail—from travel
            bookings to event coordination—with just a text. Focus on your
            vision and success while we streamline your day-to-day. Join today
            for support as dynamic as your ambitions.
          </p>
        </div>

        <div className="col-span-4 relative">
          <Image
            src={NewfounderMembershipImage}
            alt="corporate"
            className="h-full w-full object-cover rounded-3xl"
          />
          <div className="absolute w-full h-full bg-black bg-opacity-45 inset-0 rounded-3xl" />
        </div>
        <h5
          className={`${silk_serif.className} text-xl col-span-11 font-semibold text-center md:hidden`}
        >
          Employee Membrship
        </h5>
        <div className="relative col-span-4">
          <Image
            src={NewEmployeeMembershipImage}
            alt="corporate"
            className="h-full w-full object-cover rounded-3xl"
          />
          <div className="absolute w-full h-full bg-black bg-opacity-45 inset-0 rounded-3xl" />
        </div>
        <div className="col-span-6 flex flex-col justify-center gap-3">
          <h5
            className={`${silk_serif.className} text-4xl font-semibold text-center md:block hidden`}
          >
            Employee Membrship
          </h5>
          <p className="md:text-3xl text-[10px] font-light">
            Introducing DXB Care&apos;s Employee Membership: where we optimize
            your team&apos;s productivity and efficiency! Our service is
            tailored to streamline tasks and enhance work-life balance. From
            simplifying daily operations to providing essential perks,
            we&apos;re dedicated to helping you attract and retain top talent.
            Join us and elevate your team&apos;s performance!
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-6 md:py-10 py-4">
        <h4
          className={`${silk_serif.className} md:text-7xl text-2xl underline text-center underline-offset-8`}
        >
          Why us as a corporate concierge?
        </h4>
        <p className="md:text-3xl text-xs font-light text-center">
          At DXB Care, we deliver substantial value by saving our clients an
          average of 20 hours per week, totaling over 1,000 hours annually. This
          not only frees up valuable time but also significantly reduces
          operational efforts. Imagine the impact of redirecting these saved
          hours towards strategic initiatives, client engagements, or personal
          pursuits, all while maintaining peak productivity. Without our
          comprehensive concierge services, businesses risk inefficiencies and
          burnout from managing mundane tasks internally. Choose DXB Care to
          unlock unparalleled efficiency, empower your team, and elevate your
          focus on what truly matters.
        </p>
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

export default CorporateConcierge;
