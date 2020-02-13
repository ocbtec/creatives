import React, { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../css/login.css";

const Login = () => (
  <Fragment>
    <div className="main-container">
      <Header />
      <div className="login-body">Login Content</div>
      <Footer />
    </div>
  </Fragment>
);

export default Login;
