import Link from "next/link";
import React from "react";

async function getData() {
  const res = await fetch("https://basic-blog.teamrabbil.com/api/post-list/2");
  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div>
      <h1>This is Blog Page</h1>
      {data.map((singleData, index) => {
        return (
          <h1>
            <Link
              href={{
                pathname: "/singleBlog",
                query: {
                  title: singleData["title"],
                  img: singleData["img"],
                  short: singleData["short"],
                  createdAt: singleData["created_at"],
                  updatedAt: singleData["updated_at"],
                },
              }}
            >
              {singleData["title"]}
            </Link>
          </h1>
        );
      })}
    </div>
  );
};

export default Blog;
