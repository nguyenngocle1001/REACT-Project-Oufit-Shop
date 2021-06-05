import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import banner from "../../assets/banner/banner.jpg";

Banner.propTypes = {
  image: PropTypes.string,
  content: PropTypes.string,
};

Banner.defaultProps = {
  image: banner,
  content: "Welcome to Lexe Shop",
};

function Banner(props) {
  const { image, content } = props;

  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      <p className="banner__content">{content}</p>
    </div>
  );
}

export default Banner;
