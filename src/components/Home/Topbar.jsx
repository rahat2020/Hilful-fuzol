"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, Lock, AlignRight } from "react-feather";
import { navData } from "@/data/navData";
import AppButton from "@/UI/AppButton";
import SignInAndSignUp from "../Authentication";

const Topbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const links = (
    <>
      {navData?.map((item, index) => (
        <div key={index} className="relative group">
          <Link
            href={item.href}
            className={`hover:text-brand font-medium flex gap-1 items-center ${
              pathname === item?.href ? "text-brand" : ""
            }`}
          >
            {item.label}{" "}
            {item.icon && <span className="ml-1">{item.icon}</span>}
          </Link>

          {item.dropdown && (
            <div className="w-48 absolute left-0 top-6 mt-1 border rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out hidden group-hover:block bg-white shadow-lg z-10">
              <div className="bg-white w-48 py-2 opacity-0 -mt-4"></div>
              {item.dropdown.map((dropdownItem, idx) => (
                <div key={idx}>
                  <Link
                    href={dropdownItem.href}
                    className="hover:text-blue-600 flex gap-1 items-center px-4 py-3 duration-300 hover:px-6"
                  >
                    {dropdownItem.label}
                  </Link>
                  {idx < item.dropdown.length - 1 && <hr />}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );

  const smallDeviceLinks = (
    <>
      {navData?.map((item, index) => (
        <div key={index} className="relative">
          <Link
            href={item?.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className={`hover:text-brand flex gap-1 items-center ${
              pathname === item?.href ? "text-brand" : ""
            }`}
          >
            {item.label} {item?.icon}
          </Link>

          {/* Dropdown */}
          {item?.dropdown && (
            <div
              className={`w-48 left-0 top-6 mt-1 border rounded-sm transition-all duration-300 bg-white z-10 ${
                item.label === "Pages" || item.label === "Specialties"
                  ? "block"
                  : "hidden"
              }`}
            >
              {item?.dropdown?.map((dropdownItem, idx) => (
                <div key={idx}>
                  <Link
                    href={dropdownItem?.href}
                    className="hover:text-brand flex gap-1 items-center px-4 py-3 duration-300"
                  >
                    {dropdownItem?.label}
                  </Link>
                  {idx < item.dropdown.length - 1 && <hr />}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );

  const handleCallbackForMobile = () => {
    setIsModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white ">
      <div className="px-4 lg:px-24 flex items-center justify-between text-sm md:text-[15px] py-4">
        <div className="flex gap-4 w-full md:w-auto items-center justify-between md:justify-center">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-5xl text-brand"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <AlignRight />}
          </button>
          <div className="md:hidden w-full">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <p className="text-14 font-bold text-center font-sutono">
                খুরুশিয়া হিলফুল ফুযুল পরিষদ
              </p>
              <p className="text-13 font-bold text-brand text-center">
                Khurushia Hilful Fuzul Parishod
              </p>
              <p className="text-10 text-center font-bold text-gray-700">
                (It's a social, vuluntary, educational org.)
              </p>
            </Link>
          </div>
          {/* Logo */}
          <Link href="/">
            <Image
              src={"/assets/logo.jpg"}
              alt="logo"
              width={100}
              height={50}
              quality={100}
              priority={true}
              className="w-20 h-16 object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-3 lg:space-x-6 font-[500] flex-grow justify-center">
          {links}
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-2 md:space-x-4">
          <AppButton
            withoutHrefBtn
            text="Login"
            icon={Lock}
            callback={() => setIsModalOpen(true)}
            customStyles={"bg-brand text-white hover:bg-green-600 px-2"}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4 space-y-4 transform transition-transform duration-300 ease-in-out">
          {smallDeviceLinks}
          {/* Mobile Buttons */}
          <div className="flex w-[10rem] flex-col space-y-2">
            <AppButton
              withoutHrefBtn
              text="Login"
              icon={Lock}
              callback={() => handleCallbackForMobile()}
              customStyles="bg-brand text-white hover:bg-white hover:text-brand px-4 py-2 rounded-md border font-semibold flex items-center gap-2 duration-300"
            />
          </div>
        </div>
      )}
      {isModalOpen && <SignInAndSignUp setIsModalOpen={setIsModalOpen} />}
    </nav>
  );
};

export default Topbar;
