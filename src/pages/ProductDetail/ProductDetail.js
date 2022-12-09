import React from 'react';
import './ProductDetail.scss';

const ProductDetail = () => {
  return (
    <div className="productDetailContainer">
      {INFOS.map(INFO => (
        <div key={INFO.id} className="prodcutDetailContentsBox">
          <div className="productDetailArea">
            <div className="proudctDetailImageArea">
              <img alt="productImage" src={INFO.thumbnail_image_url} />
            </div>
            <div className="ProductDetailInfoArea">
              <h3 className="productDetailBrandName">{INFO.brandid}</h3>
              <h1 className="productDetailProductName">{INFO.name}</h1>
              <span className="productDetailDescription">
                {INFO.description}
              </span>
              <div className="productDetailPriceReviewBox">
                <div className="productDetailPrice">{INFO.price}22원</div>
              </div>
              <div className="productDetailQuantityBox">
                <div className="productDetailQuantity">
                  <button className="downQuantityBtn">-</button>
                  <input
                    className="productDetailQuantityValue"
                    type="text"
                    value="1"
                  />
                  <button className="upQuantityBtn">+</button>
                </div>
              </div>
              <div className="productDetailTotalPriceBox">
                <span>총 상품금액:</span>
                <p className="productDetailTotalPrice">{INFO.price}원</p>
              </div>
              <div className="productDetailBtnBox">
                <button className="productDetailCartButton">장바구니</button>
                <button className="productDetailOrderButton">구매하기</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetail;

const INFOS = [
  {
    id: 1,
    brandid: '오픈워크',
    name: '히알루론산 수분 크림',
    description: '속건조를 잡아주는 8중 복합 히알루론산 수분 크림',
    price: '8,900',
    thumbnail_image_url:
      'https://images.unsplash.com/photo-1638609927040-8a7e97cd9d6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
  },
];
