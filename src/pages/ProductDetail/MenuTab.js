import React, { useState } from 'react';
import './MenuTab.scss';

const ProductInfoTab = () => {
  return (
    <div className="productInfoTab">
      <img alt="상품설명" src="/images/productInfo.png" />
      <div className="productDeliveryInfo">
        <div className="deliveryInfoTitle"> 배송정보</div>
        <div className="deliveryInfoList">
          <ul>
            <li>배송 방법 : 택배</li>
            <li>배송 지역 : 전국지역</li>
            <li>배송 비용 : 2,000원</li>
            <li>
              배송 안내: <br />
              - 배송 방법: 택배 배송
              <br />
              - 배송 지역: 전국 <br />
              - 배송 비용: 2,000원(25,000원 이상 시 무료 배송)
              <br />
              - 제주 및 도서산간 추가 배송비: 2,500원 <br />
              - 배송 예정일 : 평일 기준 출고 후 1일 소요 (관할 지역 택배사
              사정에 따라 추가 소요될 수 있음) <br />
              - 천재지변, 물량 금증, 수급 변동 등 예외적인 사유 발생 시, 배송이
              지여될 수 있는 점 양해 부탁드립니다. <br />
              - 군부대 일부와 해외의 경우 배송이 어려울 수 있습니다. <br />-
              평일 낮 12시 이전 결제 시: 당일 출고 (주말 및 공휴일 제외) <br />-
              평일 낮 12시 이후 결제 시: 다음날 출고(주말 및 공휴일 제외)
            </li>
          </ul>
        </div>
      </div>
      <div className="productExchangeInfo">
        <div className="exchangeInfoTitle">교환 및 반품정보</div>
        <div className="exchangeInfoList">
          <ul>
            <li>
              교환/반품 안내
              <br />
              - 단순 변심에 의한 교환/반품은 제품 수량 후 7일까지 가능하며 왕복
              배송비는 고객부담입니다. <br />
              - 상세주소 미입력, 주소지 오기재 등으로 인해 상품이 반송될 경우
              왕복 배송비는 고객 부담입니다. <br />
              - 고객 사유로 인한 교환/반품/반송 시 왕복 배송비 4,000원이
              발생하며 제주 및 도서산간 지역의 경우 실제 왕복 배송비가
              부과됩니다. <br />- 상품 불량 및 오배송 등으로 인한 귀책 사유가
              있을 경우, 교환/반품 배송비는 코드방범대가 부담합니다.
              <br />
              <br />
              교환/반품 제한사항
              <br />
              - 고객의 사용, 시간경과, 제품 소비에 의해 제품의 가치가 현저히
              감소한 경우
              <br />- 구성품의 분실, 누락, 파손 혹은 포장이 훼손되어 제품의
              가치가 현저히 감소한 경우
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const ReviewTab = () => {
  return (
    <>
      <div className="productReviewTab">
        <div>후기 (0)</div>
        <div className="productDetailAllReview">전체 상품 리뷰 보기</div>
      </div>
      <div className="productReviewListBox">
        <div>리뷰가 없습니다.</div>
        <div>리뷰를 작성해 보세요!</div>
      </div>
    </>
  );
};

const ProductDetailTab = () => {
  return (
    <div className="productDetailTabBox">
      <div>상세 정보가 없습니다.</div>
    </div>
  );
};

const MenuTab = id => {
  const [currentTab, setCurrentTab] = useState('상품설명');

  return (
    <div className="productDetailMenuTab">
      <ul className="productDetailTabs">
        {TAB_ARR.map((tab, index) => (
          <li
            key={index}
            className={`productDetailTapList ${
              tab === currentTab && 'selected'
            }`}
            onClick={() => setCurrentTab(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
      <div className="productDetailContent">{TAB_MAP[currentTab]}</div>
    </div>
  );
};

export default MenuTab;

const TAB_ARR = ['상품설명', '후기', '상세정보'];

const TAB_MAP = {
  상품설명: <ProductInfoTab />,
  후기: <ReviewTab />,
  상세정보: <ProductDetailTab />,
};
