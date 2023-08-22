import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Link href={"/home"} style={{ margin: 30 }}>
        Home
      </Link>
      <br></br>
      <Link href={"/blog"} style={{ margin: 30 }}>
        Blog
      </Link>
      <br></br>
      <Link href={"/about"} style={{ margin: 30 }}>
        About
      </Link>
      <br></br>
      <Link href={"/contact"} style={{ margin: 30 }}>
        Contact
      </Link>
    </div>
  );
};

export default Menu;
