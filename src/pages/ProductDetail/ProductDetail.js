import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MenuTab from './MenuTab';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [quantityValue, setQuantityValue] = useState(1);
  const [products, setProducts] = useState({});

  const params = useParams();
  const productId = params.id;

  const upQuantity = () => {
    setQuantityValue(prev => prev + 1);
  };

  const downQuantity = () => {
    if (quantityValue === 1) {
      alert('최소 주문수량은 1개 입니다');
    } else {
      setQuantityValue(prev => prev - 1);
    }
  };

  useEffect(() => {
    fetch(`/data/MOCK_DATA.json`)
      .then(response => response.json())
      .then(result => setProducts(result[productId]));
  }, [productId]);

  console.log(products);
  const { brand_id, name, thumbnail_image_url, description, price, ...others } =
    products;

  return (
    <>
      <div className="productDetailContainer">
        <div className="productDetailContentsBox">
          <div className="productDetailArea">
            <div className="productDetailImageArea">
              <img alt="productImage" src={thumbnail_image_url} />
            </div>
            <div className="ProductDetailInfoArea">
              <h3 className="productDetailBrandName">{brand_id}</h3>
              <h1 className="productDetailProductName">{name}</h1>
              <span className="productDetailDescription">{description}</span>
              <div className="productDetailPriceReviewBox">
                <div className="productDetailPrice">
                  {[price].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                </div>
              </div>
              <div className="productDetailQuantityBox">
                <div className="productDetailQuantity">
                  <button className="downQuantityBtn" onClick={downQuantity}>
                    -
                  </button>
                  <input
                    className="productDetailQuantityValue"
                    type="text"
                    value={quantityValue}
                    readOnly
                  />
                  <button className="upQuantityBtn" onClick={upQuantity}>
                    +
                  </button>
                </div>
              </div>
              <div className="productDetailTotalPriceBox">
                <span>총 상품금액:</span>
                <p className="productDetailTotalPrice">
                  {[price * quantityValue]
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </p>
              </div>
              <div className="productDetailBtnBox">
                <button className="productDetailCartButton">장바구니</button>
                <button className="productDetailOrderButton">구매하기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="productDetailTab">
        <MenuTab />
      </div>
    </>
  );
};

export default ProductDetail;

const INFOS = [
  {
    id: 1,
    brandid: '라픈워크',
    name: '히알라라산 수분 크림',
    description: '속건조를 잡아주는 8중 복합 히알라라산 수분 크림',
    price: 8900,
    thumbnail_image_url:
      'https://images.unsplash.com/photo-1638609927040-8a7e97cd9d6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
  },
];
