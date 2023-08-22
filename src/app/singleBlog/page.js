import React from "react";

const page = ({ searchParams }) => {
  return (
    <div>
      <img
        src={searchParams.img}
        alt="post image"
        style={{ height: 300, width: 300 }}
      />
      <h1>{searchParams.title}</h1>
      <p>{searchParams.short}</p>
      <p>Created: {searchParams.createdAt}</p>
      <p>Updated: {searchParams.updatedAt}</p>
    </div>
  );
};

export default page;
