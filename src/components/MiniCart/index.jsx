import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import Images from "../../constants/images";
import { Link } from "react-router-dom";
import { IoIosRemoveCircle } from "react-icons/io";
import { useFormatPrice } from "../../hooks/useFormatPrice";

MiniCart.propTypes = {
  listProduct: PropTypes.array,
  onRemoveProductCart: PropTypes.func,
};

MiniCart.defaultProps = {
  listProduct: [],
  onRemoveProductCart: null,
};

function MiniCart(props) {
  const { listProduct, onRemoveProductCart } = props;
  const format = useFormatPrice();

  const handleRemoveProductCart = (product) => {
    if (onRemoveProductCart) onRemoveProductCart(product.id);
  };

  return (
    <div className="mini-cart">
      {listProduct.length <= 0 ? (
        <div className="mini-cart__empty">
          <img src={Images.EMPTY_CART} alt="empty cart image" />
          <p className="mini-cart__empty__text">Chưa có sản phẩm</p>
        </div>
      ) : (
        <div className="mini-cart__data">
          <h3 className="mini-cart__data__heading">Sản phẩm trong giỏ</h3>
          <ul className="mini-cart__data__list">
            {listProduct.map((product, index) => {
              return (
                <li className="mini-cart__data__item" key={index}>
                  <Link
                    to={`/products/${product.id}`}
                    className="mini-cart__data__product"
                  >
                    <div
                      className="mini-cart__data__product__image"
                      style={{ backgroundImage: `url(${product.image})` }}
                    ></div>
                    <div className="mini-cart__data__product__desc">
                      <h4 className="mini-cart__data__product__name">
                        {product.name}
                        {index}
                      </h4>
                      <div className="mini-cart__data__product__quantity">
                        x{product.quantity}
                      </div>
                    </div>
                    <p className="mini-cart__data__product__price">
                      {format.format(product.price)}
                    </p>
                  </Link>

                  <div
                    className="mini-cart__data__item__btn"
                    onClick={() => handleRemoveProductCart(product)}
                  >
                    <IoIosRemoveCircle />
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="mini-cart__data__action">
            <Link to="/cart" className="mini-cart__data__btn">
              Xem giỏ hàng
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default MiniCart;
