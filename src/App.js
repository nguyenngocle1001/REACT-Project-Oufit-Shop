import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import productApi from "./api/productApi";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import { removeProduct } from "./storeSlice/miniCartSlice";

const ProductPage = React.lazy(() => import("./pages/ProductsPage"));
const DetailPage = React.lazy(() => import("./pages/DetailPage"));

function App() {
  const listProductCart = useSelector((state) => state.miniCart);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState();

  const handleRemoveCart = (id) => {
    if (id) {
      dispatch(removeProduct(id));
    }
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div className="outfit-shop">
      <Suspense fallback={<div> loading ... </div>}>
        <Router>
          <Header
            listProductCart={listProductCart}
            onRemoveProductCart={handleRemoveCart}
            onSearch={handleSearch}
          />

          <Switch>
            <Redirect exact from="/" to="/products" />
            <Redirect exact from="/home" to="/products" />

            <Route exact path="/products">
              <ProductPage
                searchTerm={searchTerm}
                onRemoveSearch={handleSearch}
              />
            </Route>
            <Route exact path="/products/:id" component={DetailPage} />
            <Route component={NotFound} />
          </Switch>

          <Footer />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
