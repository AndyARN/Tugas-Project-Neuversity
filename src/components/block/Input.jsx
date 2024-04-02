/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function Input({
  label = "label",
  type = "text",
  placeholder = "type here...",
}) {
  return (
    <label className="form-control w-full mb-5">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full"
      />
    </label>
  );
}
