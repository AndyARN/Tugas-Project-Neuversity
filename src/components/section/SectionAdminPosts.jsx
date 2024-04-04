/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import TablePosts from "../block/TablePosts";
import Pagination from "../block/Pagination";

export default function SectionAdminPosts() {
  return (
    <section className="container mt-10">
      <div className="flex justify-between items-center">
        <h2 className="mb-3 text-2xl font-bold text-primary">Posts: </h2>

        {/* create post button */}

        <NavLink to="/admin/create-post" className="btn btn-sm btn-primary">
          Create Post
        </NavLink>
      </div>
      <TablePosts />
      <Pagination />
    </section>
  );
}
