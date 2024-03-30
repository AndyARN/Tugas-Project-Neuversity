/* eslint-disable no-unused-vars */
import React from "react";

export default function SectionPost() {
  return (
    <section className="container max-w-screen-sm">
      {/* image featured */}
      <img
        className="mb-3 w-full aspect-video"
        src="https://placehold.co/400x200"
        alt="featured image"
      />

      {/* title */}
      <h1 className="font-bold text-center text-2xl mb-6">Title post</h1>

      {/* content */}
      <article className="prose">
        <h3>Ini artikel</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          voluptates sint officiis amet numquam sed, natus reprehenderit enim
          est ipsa vero velit atque facilis, necessitatibus labore pariatur non
          soluta saepe.
        </p>
      </article>
    </section>
  );
}
