import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userData, setuserData] = useState({
    name: "",
    email: "",
  });

  const changeInputHandler = (e) => {
    setuserData((prevState) => {
      return { ...prevState, [e.target.name]: [e.target.value] };
    });
  };
  return (
    <section className="login">
      <div className="container">
        <h2>Sign in</h2>
        <form className="form login_form">
          <p className="form_error-message">This is an error Message</p>

          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={userData.name}
            onChange={changeInputHandler}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={changeInputHandler}
            autoFocus
          />
          <input  
            type="password"
            placeholder="password"
            name="password"
            value={userData.password}
            onChange={changeInputHandler}
          />
          <button type="submit" className="btn primary"> Login</button>
        </form>

        <small>Don't have an account? <Link to="/register"> sign Up
        
        </Link>

        </small>
      </div>
    </section>
  );
};

export default Login;
