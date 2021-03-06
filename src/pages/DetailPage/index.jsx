import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import productApi from "../../api/productApi";
import brandApi from "../../api/brandApi";
import { Col, Container, Row } from "reactstrap";
import DetailImage from "../../components/DetailImage";
import DetailInfo from "../../components/DetailInfo";
import { addProduct } from "../../storeSlice/miniCartSlice";

DetailPage.propTypes = {};

function DetailPage(props) {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    if (product) dispatch(addProduct(product));
  };

  //set title
  useEffect(() => {
    document.title = `Sản phẩm ${product.name}`;
  }, [product]);

  //get product by id
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await productApi.get(id);
        setProduct(response);

        const responseBrand = await brandApi.get(response.brandId);

        setProduct({ ...response, brand: responseBrand.name });
      } catch (error) {
        console.log("Failed to fetch data product at: ", error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <div className="detail-page mt-5">
      <Container>
        <Row lg="2" md="2" sm="1" xs="1">
          <Col>
            <DetailImage images={[product.image, product.image2]} />
          </Col>
          <Col>
            <DetailInfo product={product} onAddToCart={handleAddToCart} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DetailPage;
