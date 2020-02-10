import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";

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
