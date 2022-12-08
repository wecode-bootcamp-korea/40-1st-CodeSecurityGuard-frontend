import React from 'react';
import './ProductDetail.scss';

const ProductDetail = () => {
  return (
    <div className="productDetailContainer">
      {INFOS.map(INFO => (
        <div key={INFO.id} className="prodcutDetailContentsBox">
          <div className="productDetailArea">
            <div className="proudctDetailImageArea" />
            <div className="ProductDetailInfoArea">
              <h3 className="productDetailBrandName">{INFO.brandid}</h3>
              <h1 className="productDetailProductName">{INFO.name}</h1>
              <span className="productDetailDescription">
                {INFO.description}
              </span>
              <div className="productDetailPriceReviewBox">
                <div className="productDetailPrice">{INFO.price}원</div>
                <div className="productDetailReview">⭐️(22)</div>
              </div>
              <div className="productDetailQuantityBox">
                <div className="productDetailQuantity">
                  <button className="downQuantityBtn">-</button>
                  <input type="text" value="1" />
                  <button className="upQuantityBtn">+</button>
                </div>
              </div>
              <div className="productDetailTotalPrice">
                <span>총 상품금액:</span>
                <span className="productDetailPrice">{INFO.price}원</span>
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
  },
];
