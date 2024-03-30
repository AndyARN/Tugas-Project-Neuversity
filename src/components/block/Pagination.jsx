/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function Paginantion({
  currentPage = 0,
  totalPage = 0,
  onPrev,
  onNext,
}) {
  return (
    <div className="join mt-6 flex justify-center w-full">
      <button className="join-item btn" disabled={currentPage > 1}>
        «
      </button>
      <button className="join-item btn">{currentPage}</button>
      <button className="join-item btn" disabled={currentPage < totalPage}>
        »
      </button>
    </div>
  );
}
