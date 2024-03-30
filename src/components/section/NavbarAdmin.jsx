/* eslint-disable no-unused-vars */
import React from "react";

export default function NavbarAdmin() {
  return (
    <div className="bg-white shadow navbar">
      <div className="container flex-col sm:flex-row">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">MyArticle - Admin</a>
        </div>
        <div className="flex-none space-x-4">
          {/* input search */}
          <div className="join">
            <input
              className="w-full input input-sm sm:w-36 input-bordered join-item"
              placeholder="Pencarian..."
            />
            <button className="btn btn-sm join-item rounded-r-lg">Cari</button>
          </div>

          {/* logout */}
          <button className="btn btn-sm btn-error">Logout</button>
        </div>
      </div>
    </div>
  );
}
