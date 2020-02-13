import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../css/registerUser.css";

const RegisterUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    emailVisible: false,
    emailNotificationAllowed: false,
    subscribeToNewsletter: false,
    avatar: ""
  });
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [image, setImage] = useState("");
  const [errors, setErrors] = useState([]);
  const [redirect, setRedirect] = useState(false);
  //De-structure form Data
  const {
    name,
    email,
    password,
    emailVisible,
    emailNotificationAllowed,
    subscribeToNewsletter,
    avatar
  } = formData;
  const onChange = e => {
    e.target.files && uploadToCloudinary(e);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //Cloudinary
  const uploadToCloudinary = async x => {
    const files = x.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "creatives");
    const cloudinaryRes = await fetch(
      "https://api.cloudinary.com/v1_1/creatives-upload/image/upload",
      {
        method: "POST",
        body: data
      }
    );
    const file = await cloudinaryRes.json();
    setImage(file.secure_url);
  };

  const handleRedirect = () => {
    setRedirect(true);
  };
  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to="./showcase" token={token} />;
    }
  };

  const onSubmit = async e => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      password,
      emailVisible,
      emailNotificationAllowed,
      subscribeToNewsletter,
      avatar: image
    };
    //Backend
    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      const body = JSON.stringify(newUser);
      const res = await axios.post(
        "https://creatives-api.herokuapp.com/api/userRegister",

        body,
        config
      );
      setToken(res.data.token);
      setUser(res.data.user);
      console.log(res.data.user);
    } catch (err) {
      console.error(err.response.data);
      setErrors(err.response.data.errors);
    }

    // return <Redirect to="/showcase" />
  };
  //Get all errors if any
  const listErrors = errors.map(error => error.msg);
  return (
    <Fragment>
      <div className="main-container">
        <Header userName={user.name} avatarImage={user.avatar} token={token} />
        <div className="register-user-body">
          <h1>Please fill in all fields to Register</h1>
          <form autoComplete="nope" onSubmit={e => onSubmit(e)}>
            <input style={{ display: "none" }} />
            <input type="password" style={{ display: "none" }} />
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={e => onChange(e)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={e => onChange(e)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={e => onChange(e)}
              required
              minLength="6"
              autoComplete="new-password"
            />
            <input
              type="checkbox"
              placeholder="Make Email public"
              name="emailVisible"
              onChange={e => onChange(e)}
              defaultChecked={emailVisible}
            />
            <input
              type="checkbox"
              placeholder="Allow Email Notifications"
              name="emailNotificationAllowed"
              onChange={e => onChange(e)}
              defaultChecked={emailNotificationAllowed}
            />
            <input
              type="checkbox"
              placeholder="Subscribe to our Newsletter"
              name="subscribeToNewsletter"
              onChange={e => onChange(e)}
              defaultChecked={subscribeToNewsletter}
            />
            <input
              type="file"
              placeholder="Upload an avatar"
              name="avatar"
              value={avatar}
              onChange={e => onChange(e)}
            />
            {renderRedirect()}
            <button onClick={handleRedirect}>Register</button>
          </form>
          <p>{token}</p>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.avatar}</p>
          <p>{user.creative}</p>
          <p>{listErrors}</p>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default RegisterUser;
