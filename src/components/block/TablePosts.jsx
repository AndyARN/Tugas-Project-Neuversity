/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";

export default function TablePosts() {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>
              <p className="w-40 line-clamp-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                laudantium cupiditate cum amet vitae, necessitatibus impedit
                adipisci expedita facilis voluptate.
              </p>
            </td>
            <td>
              <div className="overflow-hidden w-72 line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
                voluptate dicta maiores nemo odio mollitia sunt culpa quidem
                officia vel debitis et ad excepturi eius alias? At aliquid odio
                ea!
              </div>
            </td>
            <td>
              <div className="flex gap-3">
                <NavLink
                  to="/admin/edit-post"
                  className="btn btn-sm btn-success"
                >
                  Edit
                </NavLink>
                <button className="btn btn-sm btn-error btn-outline">
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
