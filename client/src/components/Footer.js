import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer">
        <p className="pFooter">
          {" "}
          Copyright © 2020 Creatives{" "}
          <Link className="linkFooter" to="/Terms">
            Terms & Conditions
          </Link>
        </p>
      </div>
    </Fragment>
  );
};

export default Footer;
