import React from "react";

async function getData() {
  const res = await fetch("https://basic-blog.teamrabbil.com/api/post-list/2");
  return res.json();
}

const Home = async () => {
  const data = await getData();
  return (
    <div>
      <h1>This is Home Page</h1>
      {data.map((singleData, index) => {
        return <h1>{singleData["title"]}</h1>;
      })}
    </div>
  );
};

export default Home;
