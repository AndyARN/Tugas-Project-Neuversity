/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function CardPost({
  image = "https://placehold.co/400x200",
  title = "title",
  description = "description",
}) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          className="object-cover object-center w-full h-24 aspect-video"
          src={image}
          alt={title}
        />
      </figure>
      <div className="p-4 card-body">
        <h2 className="card-title sm:text-lg text-sm">{title}</h2>
        <p className="line-clamp-2 sm:text-base text-xs">{description}</p>
        <div className="card-actions justify-end">
          <button className="btn sm:btn-sm btn-xs btn-primary">Read Me</button>
        </div>
      </div>
    </div>
  );
}
