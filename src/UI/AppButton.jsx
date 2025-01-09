"use client";
import React from "react";
import Link from "next/link";

const AppButton = ({
  href = "",
  text = "",
  icon: Icon,
  disable = false,
  customStyles = "",
  iconClasses = "",
  customBtnStyles = "flex items-center",
  withoutHrefBtn = false,
  targetBlank = "",
  callback = () => {},
}) => {
  return (
    <div className={`font-semibold duration-300 ${customBtnStyles}`}>
      {withoutHrefBtn ? (
        <button
          onClick={() => callback()}
          disabled={disable}
          className={`flex items-center px-2 md:px-6 py-1 md:py-2 rounded-md ${customStyles} ${
            disable
              ? "bg-green-300 text-gray-500 cursor-not-allowed"
              : "bg-brand text-white hover:bg-green-600"
          }`}
        >
          {Icon && <Icon className={iconClasses || "w-5 h-5"} />}{" "}
          <span className="ms-2">{text}</span>
        </button>
      ) : (
        <Link href={href} target={targetBlank}>
          <button
            disabled={disable}
            className={`flex items-center px-2 md:px-6 py-1 md:py-2 rounded-md ${customStyles} ${
              disable
                ? "bg-green-300 text-gray-500 cursor-not-allowed"
                : "bg-brand text-white hover:bg-green-600"
            }`}
            onClick={() => callback()}
          >
            {Icon && <Icon className={iconClasses || "w-5 h-5"} />}{" "}
            <span className="ms-2">{text}</span>
          </button>
        </Link>
      )}
    </div>
  );
};

export default AppButton;
