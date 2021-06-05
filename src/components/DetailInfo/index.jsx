import React from "react";
import PropTypes from "prop-types";
import { InputNumber, Rate } from "antd";
import "./style.scss";
import { useFormatPrice } from "../../hooks/useFormatPrice";

DetailInfo.propTypes = {
  product: PropTypes.object.isRequired,
};

function DetailInfo(props) {
  const { product } = props;
  const formatPrice = useFormatPrice();
  return (
    <div className="detail-info">
      <p className="detail-info__brand">{product.brand}</p>
      <h3 className="detail-info__name">{product.name}</h3>
      <p className="detail-info__price">{formatPrice.format(product.price)}</p>
      <div className="detail-info__quantity">
        Số lượng
        <InputNumber
          className="detail-info__quantity__input"
          min={1}
          max={10}
          defaultValue={3}
        />
      </div>
      <div className="detail-info__rating">
        Đánh giá:
        <Rate
          allowHalf
          disabled
          defaultValue={2.5}
          className="detail-info__rating__value"
        />
      </div>
      <div className="detail-info__desc">
        <p className="detail-info__desc__name">Thông tin sản phẩm</p>
        <p
          className="detail-info__desc__value"
          dangerouslySetInnerHTML={{ __html: product.desc }}
        ></p>
      </div>
      <button className="detail-info__btn">Thêm vào giỏ</button>
    </div>
  );
}

export default DetailInfo;
