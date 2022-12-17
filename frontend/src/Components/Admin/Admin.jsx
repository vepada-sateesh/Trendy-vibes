import React from "react";

const Admin = () => {
  let url = "http://localhost:8080/admin/login";
  return (
    <div>
      <a href={url} target="_blank">
        Admin
      </a>
    </div>
  );
};

export { Admin };
