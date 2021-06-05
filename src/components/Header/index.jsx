import React, { useState } from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "reactstrap";
import { NavLink, useHistory } from "react-router-dom";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import "./style.scss";
import MiniCart from "../MiniCart";

Header.propTypes = {
  listProductCart: PropTypes.array,
  onRemoveProductCart: PropTypes.func,
  onSearch: PropTypes.func,
};

Header.defaultProps = {
  listProductCart: [],
  onRemoveProductCart: null,
  onSearch: null,
};

function Header(props) {
  const { listProductCart, onRemoveProductCart, onSearch } = props;

  const handleOnSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.searchTerm.value;
    if (searchTerm) onSearch(searchTerm);
    e.target.reset();
  };

  return (
    <header className="header">
      <Container>
        <div className="header__container">
          <NavLink to="/" className="header__logo">
            Lexe
          </NavLink>
          <input type="checkbox" name="" id="showSearchMobile" hidden />
          <form
            className="header__search"
            onSubmit={handleOnSearch}
            autoComplete="off"
          >
            <input
              type="text"
              className="header__search__input"
              placeholder="Tìm sản phẩm ..."
              name="searchTerm"
            />
            <button className="header__search__btn">
              <AiOutlineSearch />
            </button>
          </form>

          <div className="header__action">
            <label
              htmlFor="showSearchMobile"
              className="mobile header__action__item"
            >
              <AiOutlineSearch />
            </label>

            <button className="header__action__item">
              <div className="header__cart">
                <AiOutlineShoppingCart />
                <span className="header__cart__number">
                  {listProductCart.length}
                </span>
              </div>
              <MiniCart
                listProduct={listProductCart}
                onRemoveProductCart={onRemoveProductCart}
              />
            </button>
            <button className="header__account header__action__item">
              <FiUser />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
