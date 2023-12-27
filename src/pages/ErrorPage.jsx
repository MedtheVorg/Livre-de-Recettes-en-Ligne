import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1 className="text-6xl">Page not found 404</h1>
      <Link to={"/"}>go back home</Link>
    </div>
  );
};

export default ErrorPage;
