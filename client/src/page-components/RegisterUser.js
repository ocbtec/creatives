import React, { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../css/registerUser.css";

const RegisterUser = () => (
  <Fragment>
    <div className="main-container">
      <Header />
      <div className="register-user-body">Register User</div>
      <Footer />
    </div>
  </Fragment>
);

export default RegisterUser;
