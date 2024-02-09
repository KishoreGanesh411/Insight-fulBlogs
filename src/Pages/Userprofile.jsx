import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "../Images/avatar15.jpg";
import { FaCheck, FaEdit } from "react-icons/fa";

const UserProfile = () => {
  const [avatar, setAvatar] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [currentPassword, setCurrentPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmNewPassword, setConfirmNewPassword] = useState();

  return (
    <section className="profile">
      <div className="container profile_container">
        <Link to={`/myposts/sdfsdf`} className="btn"  >
          My post</Link>
 
        <div className="profile_details">
          <div className="avatar_wrapper">
            <div className="profile_avatar">
              <img src={Avatar} alt="" />
            </div>

            <form className="avatar_form">
              <input
                type="file"
                name="avatar"
                id="avatar"
                onChange={(e) => setAvatar(e.target.files[0])}
                accept="jpg, png, jpeg"
              />

              <label htmlFor="avatar"><FaEdit/></label>
            </form>
            <button className="profile_avatar-btn">
              <FaCheck />
            </button>
          </div>

          <h1>Ernest Achiver</h1>

          <form className="form profile_form">
            <p className="form_error-message">this is an error Message</p>
            <input
              type="text"
              placeholder="full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter Your Password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="confirm your password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
          <button type="submit" className="btn primary">
            Update Details
            </button>
          </form>
            
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
