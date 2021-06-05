import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Banner from "../../components/Banner";
import { Col, Container, Row } from "reactstrap";
import BrandList from "../../components/BrandList";
import ProductList from "../../components/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../storeSlice/productSlice";
import brandApi from "../../api/brandApi";
import Pagination from "../../components/Pagination";
import Sort from "../../components/Sort";
import Filter from "../../components/Filter";
import { addProduct } from "../../storeSlice/miniCartSlice";
import { useLocation, useParams } from "react-router";
import ResultSearch from "../../components/ResultSearch";
import Images from "../../constants/images";

ProductPage.propTypes = {
  searchTerm: PropTypes.string,
  onRemoveSearch: PropTypes.func,
};

ProductPage.defaultProps = {
  searchTerm: null,
  onRemoveSearch: null,
};

function ProductPage(props) {
  const { searchTerm, onRemoveSearch } = props;

  const { productList, totalRow } = useSelector((state) => state.product);
  const [listOrigin, setListOrigin] = useState([]);
  const [list, setList] = useState([]);

  const [brands, setBrands] = useState([]);
  const dispatch = useDispatch();

  const [filter, setFilter] = useState({});
  const [pagination, setPagination] = useState({
    limit: 9,
    page: 1,
  });

  const [sortData, setSortData] = useState({});

  //dispatch get productList
  useEffect(() => {
    let params = {
      ...pagination,
      ...filter,
    };
    if (searchTerm) {
      params = {
        ...params,
        search: searchTerm,
      };
    }

    dispatch(getAllProduct(params));
  }, [pagination, filter, searchTerm]);

  console.log("productList :>> ", productList);

  //fetch get brand list
  useEffect(() => {
    const fetchBrandsData = async () => {
      try {
        const response = await brandApi.getAll();
        setBrands(response);
      } catch (error) {
        console.log("Failed to fetch brand data at: ", error);
      }
    };
    fetchBrandsData();
  }, []);

  //sort data
  useEffect(() => {
    const newList = [...listOrigin];
    switch (sortData.sortBy) {
      case "priceAsc":
        newList.sort((a, b) => {
          return a.price - b.price;
        });

        break;
      case "priceDesc":
        newList.sort((a, b) => {
          return b.price - a.price;
        });

        break;
    }

    setList(newList);
  }, [sortData, listOrigin]);

  const handleGetBrandName = (brandId) => {
    if (brands.length > 0)
      return brands.find((brand) => {
        return brand.id == brandId;
      }).name;
  };

  //setup list has brand name
  useEffect(() => {
    const newList = [];

    productList.forEach((product) => {
      const brand = handleGetBrandName(product.brandId);
      const newProduct = { ...product, brand: brand };
      newList.push(newProduct);
    });
    setListOrigin(newList);
    setList([]);
    setList(newList);
  }, [productList, brands]);

  const handleOnPageChange = (pageIndex) => {
    setPagination({ ...pagination, page: pageIndex });
  };

  const handleSortChange = (values) => {
    if (sortData != values) setSortData(values);
  };

  const handleFilterChange = (values) => {
    setFilter(values);
  };

  const handleAddToCart = (product) => {
    if (product) dispatch(addProduct(product));
  };

  return (
    <div className="home-page">
      <Banner />
      <Container className="mt-2">
        <Row>
          <Col lg="3" md="3">
            <Filter brands={brands} onFilterChange={handleFilterChange} />
          </Col>
          <Col lg="9" md="9">
            {searchTerm && (
              <ResultSearch
                onRemoveSearch={onRemoveSearch}
                searchTerm={searchTerm}
              />
            )}
            <Row>
              <Col>
                <Sort onSortChange={handleSortChange} />
              </Col>
            </Row>
            {list.length > 0 ? (
              <>
                <ProductList list={list} onAddToCart={handleAddToCart} />
                <Row className="d-flex justify-content-center mt-3" noGutters>
                  <Col xs="auto">
                    <Pagination
                      totalRow={totalRow}
                      pagination={pagination}
                      onPageChange={handleOnPageChange}
                    />
                  </Col>
                </Row>
              </>
            ) : (
              <>
                <img src={Images.NO_DATA} alt="" />
              </>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductPage;
