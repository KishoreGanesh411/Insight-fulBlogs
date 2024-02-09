import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [userData, setuserData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const changeInputHandler = (e) => {
    setuserData((prevState) => {
      return { ...prevState, [e.target.name]: [e.target.value] };
    });
  };
  return (
    <section className="register">
      <div className="container">
        <h2>Sign Up</h2>
        <form className="form register_form">
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
          />
          <input  
            type="password"
            placeholder="password"
            name="password"
            value={userData.password}
            onChange={changeInputHandler}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={userData.password2}
            onChange={changeInputHandler}
          />
          <button type="submit" className="btn primary"> Register</button>
        </form>

        <small>already have an account? <Link to="/login"> sign in
        
        </Link>

        </small>
      </div>
    </section>
  );
};

export default Register;
