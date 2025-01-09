"use client";
import AppButton from "@/UI/AppButton";
import { size } from "lodash";
import Link from "next/link";
import React, { useState } from "react";
import { Eye, EyeOff } from "react-feather";
import { checkEmailForValid } from "@/utils/appHelpers";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [viewPassword, setViewPassword] = useState(false);
  const [mutationData, setMutationData] = useState({
    email: "",
    password: "",
  });

  const isValidEmail = checkEmailForValid(mutationData.email);

  const handleChange = (context, value) => {
    if (context === "email") {
      if (isValidEmail) {
        setMutationData((prevState) => ({
          ...prevState,
          [context]: value,
        }));
      }
    }
    setMutationData((prevState) => ({
      ...prevState,
      [context]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
      alert("Authentication successful!");
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const isDisableBtn =
    !isValidEmail ||
    !mutationData?.email ||
    !mutationData.password ||
    size(mutationData?.password) < 6 ||
    isLoading;

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="signin-email"
            className="block text-sm font-medium text-gray-700"
          >
            Email <span className="text-red text-14">*</span>
          </label>
          <input
            id="signin-email"
            type="email"
            required
            name="email"
            defaultValue={mutationData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm
                      focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                      transition-all duration-300 ease-in-out"
            placeholder="test@example.com"
          />
          {mutationData?.email && !isValidEmail && (
            <span className="text-red-500 text-sm py-2">
              Invalid email address
            </span>
          )}
        </div>
        <div className="space-y-2">
          <label
            htmlFor="signin-password"
            className="block text-sm font-medium text-gray-700"
          >
            Password <span className="text-red text-14">*</span>
          </label>
          <div className="border border-gray-300 rounded-lg flex items-center justify-center">
            <input
              id="signin-password"
              type={viewPassword ? "text" : "password"}
              name="password"
              defaultValue={mutationData.password}
              required
              onChange={(e) => handleChange("password", e.target.value)}
              className="block w-full px-4 py-3 bg-gray-50  text-gray-900 text-sm
                      focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                      transition-all duration-300 ease-in-out"
              placeholder="••••••••"
            />
            {viewPassword ? (
              <EyeOff
                className="mr-2 text-gray-400 cursor-pointer"
                onClick={() => setViewPassword(false)}
              />
            ) : (
              <Eye
                className="mr-2 text-gray-400 cursor-pointer"
                onClick={() => setViewPassword(true)}
              />
            )}
          </div>
          {mutationData.password && size(mutationData.password) < 6 && (
            <span className="text-red-500 text-sm py-2">
              Password should be at least 6 characters
            </span>
          )}
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <Link
              href="/"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot your password?
            </Link>
          </div>
        </div>
        <AppButton
          text={isLoading ? "Loging in..." : "Login"}
          disable={isDisableBtn}
          withoutHrefBtn
          callback={handleSubmit}
          customStyles="w-full bg-brand flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-semibold text-white transition-all duration-300 ease-in-out"
        />
      </form>
    </div>
  );
};

export default Login;
