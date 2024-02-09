import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="errorPage">
      <div className="center">
        <Link to="/" className="btn primary">
          Go Back To Home
        </Link>

        <h2>Page Not Found !</h2>
      </div>
    </section>
  );
};

export default Error;
