import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "reactstrap";
import Product from "../Product";

ProductList.propTypes = {
  list: PropTypes.array,
  onAddToCart: PropTypes.func,
};

ProductList.defaultProps = {
  list: [],
  onAddToCart: null,
};

function ProductList(props) {
  const { list, onAddToCart } = props;

  return (
    <div className="product-list">
      <Row noGutters xl="3" lg="3" md="3" sm="2" xs="1">
        {list.map((item) => {
          return (
            <Col key={item.id}>
              <Product product={item} onAddToCart={onAddToCart} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default ProductList;
