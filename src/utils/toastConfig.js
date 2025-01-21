/* eslint-disable max-params */

"use client";

import { toast } from "react-toastify";

const toastType = ["info", "success", "warning", "error", "default"];

const toastAlert = (
  type,
  toastBody,
  position,
  toastId,
  options = { autoClose: 10000 }
) => {
  if (toastId) toast.dismiss(toastId.current);

  if (toastType?.includes(type)) {
    toast[type](toastBody, {
      position,
      toastId,
      ...options,
    });
  } else {
    toast(toastBody || "Default Toast", {
      position,
      toastId,
      ...options,
    });
  }
};

export default toastAlert;
