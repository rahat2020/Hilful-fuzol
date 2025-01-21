"use client";

import { useRef, useState } from "react";
import { size } from "lodash";
import emailjs from "@emailjs/browser";
import toastAlert from "@/utils/toastConfig";
import { checkEmailForValid } from "@/utils/appHelpers";
import Image from "next/image";

export default function ContactUs() {
  const formRef = useRef();
  const toastId = useRef();
  const [formData, setFormData] = useState({
    to_name: "",
    from_name: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  console.log("form", formData);
  const isValidEmail = checkEmailForValid(formData.from_name);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICEID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        { ...formData },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      if (response?.status === 200) {
        toastAlert("success", "Your Email sent successfully!", "top-right");
        setFormData({ to_name: "", from_name: "", message: "" });
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      setFormData({ to_name: "", from_name: "", message: "" });
      toastAlert(
        "error",
        "Failed to send the email, please try again!",
        "top-right",
        toastId
      );
    }
  };

  const isDisabled =
    !isValidEmail ||
    !formData.to_name ||
    !formData.from_name ||
    size(formData?.message) > 300 ||
    !formData.message;

  return (
    <div className="relative min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <Image
        src="/assets/program-1.jpg"
        alt="Hero Image"
        layout="fill"
        loading="lazy"
        objectFit="cover"
        className="brightness-50"
      />
      <div className="max-w-md mx-auto p-8 absolute md:inset-0 bg-white rounded-lg shadow-2xl overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-3xl font-extrabold text-center text-brand mb-6">
            Contact Us
          </h2>
          <form ref={formRef} className="space-y-6">
            <div className="flex space-x-4">
              <div className="flex-1">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name <span className="text-red text-12 font-medium">*</span>
                </label>
                <input
                  type="text"
                  name="to_name"
                  id="name"
                  value={formData.to_name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-regular-300 p-2 rounded-md shadow-lg sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition- duration-300 ease-in-out"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email <span className="text-red text-12 font-medium">*</span>
              </label>
              <input
                type="email"
                name="from_name"
                id="email"
                value={formData.from_name}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-regular-300 p-2 rounded-md shadow-lg sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition- duration-300 ease-in-out"
              />
              {formData?.email && !isValidEmail && (
                <span className="text-red-500 text-sm py-2">
                  Invalid email address.
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message <span className="text-red text-12 font-medium">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-regular-300 rounded-md shadow-lg p-2 sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition- duration-300 ease-in-out"
              ></textarea>
              <div className="flex justify-between items-center">
                {size(formData?.message) > 300 && (
                  <span className="text-red-500 text-sm py-2">
                    Message can't be more than 300 characters.
                  </span>
                )}

                {formData?.message && (
                  <span className="text-gray-500 text-sm py-2">
                    {size(formData?.message)}/300
                  </span>
                )}
              </div>
            </div>
            <div>
              <button
                type="submit"
                disabled={isDisabled}
                onClick={handleSubmit}
                className={`w-full flex justify-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium text-white bg-brand hover:bg-green-500 ${
                  isDisabled && "bg-green-500 cursor-not-allowed"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
