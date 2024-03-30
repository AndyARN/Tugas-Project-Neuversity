/* eslint-disable no-unused-vars */
import React from "react";
import CardPost from "../block/CardPost";
import Pagination from "../block/Pagination";

export default function SectionCatalog() {
  const posts = [
    {
      id: 1,
      title: "Posts 1",
      description: "Description 1",
    },
    {
      id: 2,
      title: "Posts 2",
      description: "Description 2",
    },
    {
      id: 3,
      title: "Posts 3",
      description: "Description 3",
    },
    {
      id: 4,
      title: "Posts 4",
      description: "Description 4",
    },
  ];

  return (
    <section className="container py-10">
      {/* title */}
      <h3 className="text-primary font-bold sm:text-4xl text-2xl mb-4">
        Posts
      </h3>
      {/* post */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-x-3 gap-y-6">
        {posts.map((post) => (
          <CardPost
            key={post.id}
            title={post.title}
            description={post.description}
          />
        ))}
      </div>

      {/* paginantion */}
      <Pagination />
    </section>
  );
}
