import React from "react";
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
        <Row>
          <Col xs="auto">
            <NavLink to="/" className="header__logo">
              Lexe
            </NavLink>
          </Col>
          <Col className="d-flex align-items-center">
            <form className="header__search" onSubmit={handleOnSearch}>
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
          </Col>
          <Col xs="auto" className="d-flex align-items-center">
            <button className="header__cart header__action">
              <AiOutlineShoppingCart />
              <span className="header__cart__number">
                {listProductCart.length}
              </span>
              <MiniCart
                listProduct={listProductCart}
                onRemoveProductCart={onRemoveProductCart}
              />
            </button>
          </Col>
          <Col xs="auto" className="d-flex align-items-center">
            <button className="header__account header__action">
              <FiUser />
            </button>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
