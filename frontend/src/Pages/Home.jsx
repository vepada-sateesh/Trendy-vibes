import React from "react";

const Home = () => {
  let url = "http://localhost:8080/admin/login";
  return (
    <div>
      <a href={url}>Admin</a>
    </div>
  );
};

export default Home;
