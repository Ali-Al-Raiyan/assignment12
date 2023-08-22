import React from "react";

const page = () => {
  return (
    <div>
      <h1>This is Contact page</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br></br>
        <br></br>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <br></br>
        <br></br>
        <label>
          Website:
          <input type="text" name="website" />
        </label>
        <br></br>
        <br></br>
        <label>
          Message:
          <textarea />
        </label>
        <br></br>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default page;
