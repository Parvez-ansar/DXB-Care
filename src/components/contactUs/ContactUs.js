"use client";
import React from "react";
import Image from "next/image";
import { MdOutlineMail } from "react-icons/md";
import { BsTelegram, BsWhatsapp } from "react-icons/bs";
import { FaRegCalendar } from "react-icons/fa";
import { useFormik } from "formik";
import { countryCodes } from "@/utils/countryCode";
import * as Yup from "yup";
import { silk_serif } from "@/fonts/fonts";
import { NewContextUsBgImage } from "../../../public/image";

const ContactUs = () => {
  const handleEmailSubmit = () => {};
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      countryCode: "",
      number: "",
      enquiry: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .required("Name is required")
        .min(3, "Minimum 3 letters required")
        .max(20, "invalid"),
      email: Yup.string()
        .required("Email is required")
        .matches(
          /^(?!\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          "Invalid Email"
        ),
      countryCode: Yup.string().required("Country code is required"),
      number: Yup.string()
        .required("Number is required")
        .matches(/^[0-9]{7,15}$/, "Invalid Email"),
      enquiry: Yup.string().required("Enquiry is required"),
    }),

    validateOnChange: true,
    validateOnBlur: false,
    validateOnMount: true,
    onSubmit: handleEmailSubmit,
  });

  console.log(formik.values);
  return (
    <section className="relative pb-10">
      <div className="relative px-3 md:px-0">
        <Image
          src={NewContextUsBgImage}
          alt="Contact Us"
          className="rounded-xl md:rounded-[0] overflow-hidden"
        />
        <p
          className={`${silk_serif.className} md:hidden absolute bottom-4 text-center px-5 text-sm font-normal w-full left-1/2 -translate-x-1/2`}
        >
          Feel free to reach out directly or use the adjacent form - We&apos;re
          excited to be a part of your story!
        </p>
      </div>
      <div className="h-full w-full md:absolute inset-0 flex justify-center items-center">
        <div className="md:max-w-[80%] max-w-full w-full mx-auto grid grid-cols-11 gap-8">
          <div className="flex flex-col md:col-span-4 col-span-11 lg:gap-8 md:gap-4">
            <h4
              className={`${silk_serif.className} lg:text-5xl md:text-4xl font-semibold md:block hidden`}
            >
              Contact Us
            </h4>
            <p
              className={`lg:text-2xl md:text-lg md:block hidden ${silk_serif.className}`}
            >
              Feel free to reach out directly or use the adjacent form -
              We&apos;re excited to be a part of your story!
            </p>
            <div className="grid grid-cols-2 lg:gap-6 md:gap-3 gap-6 md:mt-0 mt-6">
              <a
                href="https://www.WordPress.com"
                target="_blank"
                className="flex items-center gap-2 md:text-base lg:text-xl text-sm md:col-span-2 col-span-1"
              >
                <MdOutlineMail className="md:w-6 lg:w-7 w-5 md:h-6 lg:h-7 h-5" />
                <span>Mail</span>
              </a>
              <a
                href="https://telegram.me/dxbcare?"
                target="_blank"
                className="flex items-center gap-2 md:text-base lg:text-xl text-sm md:col-span-2 col-span-1"
              >
                <BsTelegram className="md:w-6 lg:w-7 w-5 md:h-6 lg:h-7 h-5" />
                <span>Telegram</span>
              </a>
              <a
                href="https://calendly.com/dxbcare/15min"
                target="_blank"
                className="flex items-center gap-2 md:text-base lg:text-xl text-sm md:col-span-2 col-span-1"
              >
                <FaRegCalendar className="md:w-6 lg:w-7 w-5 md:h-6 lg:h-7 h-5" />
                <span>Schedule a call</span>
              </a>
              <a
                href="https://wa.me/919599005868?"
                target="_blank"
                className="flex items-center gap-2 md:text-base lg:text-xl text-sm md:col-span-2 col-span-1"
              >
                <BsWhatsapp className="md:w-6 lg:w-7 w-5 md:h-6 lg:h-7 h-5" />
                <span>Whatsapp</span>
              </a>
            </div>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="md:col-span-7 col-span-11 flex flex-col lg:gap-5 md:gap-2 gap-5"
          >
            <h4 className="text-3xl font-semibold text-center md:block hidden">
              How Can We Help You
            </h4>
            <input
              type="text"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="block md:placeholder:text-xl placeholder:text-sm md:text-xl text-sm placeholder:text-white md:py-[6px] lg:py-2.5 py-1.5 px-0 w-full  text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              placeholder="Name"
            />
            <input
              type="text"
              className="block md:placeholder:text-xl placeholder:text-sm md:text-xl text-sm placeholder:text-white md:py-[6px] lg:py-2.5 py-1.5 px-0 w-full  text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              placeholder="Email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <select
              id="underline_select"
              name="countryCode"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.countryCode}
              className="block md:py-[6px] lg:py-2.5 py-1.5 px-0 md:text-xl text-sm w-full text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option className="text-white placeholder:text-white" selected>
                Country Code
              </option>
              {countryCodes.map((country, i) => (
                <option
                  key={i}
                  className="text-white placeholder:text-white"
                  value={country.dial_code}
                >
                  {country.dial_code} {country.name}
                </option>
              ))}
            </select>
            <input
              type="number"
              className="block md:placeholder:text-xl placeholder:text-sm md:text-xl text-sm placeholder:text-white md:py-[6px] lg:py-2.5 py-1.5 px-0 w-full text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              placeholder="Contact Number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.number}
              name="number"
            />
            <input
              type="text"
              className="block md:placeholder:text-xl placeholder:text-sm md:text-xl text-sm placeholder:text-white md:py-[6px] lg:py-2.5 py-1.5 px-0 w-full text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              placeholder="Enquiry"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.enquiry}
              name="enquiry"
            />
            <button
              type="submit"
              disabled={!formik.isValid}
              className="bg-white text-black disabled:opacity-70 md:mt-5 lg:mt-0 mt-0 py-1 px-2 sm:py-3 md:py-1 lg:py-3 sm:px-4 text-xs sm:text-xl font-semibold rounded-full self-center"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
