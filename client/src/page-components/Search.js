import React, { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/search.css";

const Search = () => {
  return (
    <Fragment>
      <div className="main-container">
        <Header />
        <div className="search-body">Search</div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Search;
