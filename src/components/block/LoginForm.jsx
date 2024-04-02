/* eslint-disable no-unused-vars */
import React from "react";
import Input from "./Input";

export default function LoginForm() {
  return (
    <div className="card shadow-xl bg-base-100">
      <div className="card-body">
        <form className="flex flex-col items-stretch">
          {/* title */}
          <h2 className="text-2xl font-bold mb-3">Login Form</h2>
          {/* username */}
          <Input
            label="Username"
            type="text"
            placeholder="type your username here..."
          />

          {/* password */}
          <Input
            label="Password"
            type="password"
            placeholder="type your password here..."
          />

          {/* submit */}
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
}
