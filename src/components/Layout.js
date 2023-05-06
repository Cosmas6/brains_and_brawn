import React from "react";

const Layout = ({ children, isLoading }) => {
  return (
    <div className={`layout${isLoading ? " loading" : ""}`}>{children}</div>
  );
};

export default Layout;
