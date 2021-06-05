import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Carousel } from "reactstrap";

BrandList.propTypes = {
  brandList: PropTypes.array,
};

BrandList.defaultProps = {
  brandList: [],
};

function BrandList(props) {
  return (
    <div className="brand-list">
      <Carousel></Carousel>
    </div>
  );
}

export default BrandList;
