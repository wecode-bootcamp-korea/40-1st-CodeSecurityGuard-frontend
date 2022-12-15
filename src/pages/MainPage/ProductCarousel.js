import React, { useState, useEffect } from 'react';
import './ProductCarousel.scss';
import MainProductCard from './MainProductCard';
import { api } from '../../api/config';
import './MainProductCard.scss';

const ProductCarousel = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [productLists, setProductLists] = useState([]);
  const TOTAL_PRODUCT_SLIDES = productLists.length - 4;

  const moveProductCarousel = {
    transition: 'all 0.5s ease-in-out',
    transform: `translateX(-${currentIdx * 266}px)`,
  };

  const nextProduct = () => {
    if (currentIdx >= TOTAL_PRODUCT_SLIDES) {
      return;
    } else {
      setCurrentIdx(prev => prev + 1);
    }
  };

  const prevProduct = () => {
    if (currentIdx === 0) {
      return;
    } else {
      setCurrentIdx(prev => prev - 1);
    }
  };

  useEffect(() => {
    fetch(api.list)
      .then(response => response.json())
      .then(result => setProductLists(result.data.slice(0, 8)));
  }, []);

  return (
    <div className="productList">
      <h1 className="productTitle">
        가격 거품을 걷어내고, 성분에 집중한 스킨케어
      </h1>
      <div className="productCarousel">
        <div className="productCarouselBox " style={moveProductCarousel}>
          {productLists.map(product => (
            <MainProductCard
              className="mainProduct"
              key={product.id}
              {...product}
            />
          ))}
        </div>
      </div>
      {currentIdx !== 0 && (
        <div className="prevProductSlideButton" onClick={prevProduct}>
          〈
        </div>
      )}
      {currentIdx < TOTAL_PRODUCT_SLIDES && (
        <div className="nextProductSlideButton" onClick={nextProduct}>
          〉
        </div>
      )}
    </div>
  );
};

export default ProductCarousel;
