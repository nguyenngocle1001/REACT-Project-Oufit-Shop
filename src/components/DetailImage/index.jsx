import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";

DetailImage.propTypes = {
  images: PropTypes.array,
};

DetailImage.defaultProps = {
  images: [],
};

function DetailImage(props) {
  const { images } = props;

  const [selected, setSelected] = useState(0);

  const handleImageChange = (index) => {
    if (selected != index) setSelected(index);
  };

  return (
    <div className="detail-image">
      <div
        className="detail-image__main"
        style={{ backgroundImage: `url(${images[selected]})` }}
      ></div>
      <ul className="detail-image__thumbnails">
        {images.map((image, index) => {
          return (
            <li
              className={
                index == selected
                  ? "detail-image__item active"
                  : "detail-image__item"
              }
              style={{ backgroundImage: `url(${image})` }}
              key={index}
              onClick={() => handleImageChange(index)}
            ></li>
          );
        })}
      </ul>
    </div>
  );
}

export default DetailImage;
