import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Rate } from "antd";
import { Link } from "react-router-dom";

Product.propTypes = {
  product: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func,
};
Product.defaultProps = {
  product: {},
  onAddToCart: null,
};

const formatter = new Intl.NumberFormat("en-vi", {
  style: "currency",
  currency: "VND",
});

function Product(props) {
  const { product, onAddToCart } = props;

  const handleAddToCart = (product) => {
    const productValues = {
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: 1,
    };

    if (onAddToCart) {
      onAddToCart(productValues);
    }
  };

  return (
    <div className="product">
      <div
        className="product__image"
        style={{ backgroundImage: `url(${product.image})` }}
      ></div>
      <Link to={`/products/${product.id}`} className="product__name">
        {product.name}
      </Link>
      <p className="product__brand">{product.brand || "loading..."}</p>
      <div className="product__price">{formatter.format(product.price)}</div>
      <Rate
        className="product__rating"
        disabled
        allowHalf
        defaultValue={product.rating}
      />
      <button className="product__btn" onClick={() => handleAddToCart(product)}>
        Thêm vào giỏ
      </button>
    </div>
  );
}

export default Product;
