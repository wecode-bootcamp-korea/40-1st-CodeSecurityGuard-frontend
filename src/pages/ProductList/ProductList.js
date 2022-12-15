import React, { useEffect, useState } from 'react';
import './ProductList.scss';
import ProductCard from './Product/ProductCard';
import { useParams } from 'react-router-dom';
import SubCategoryList from './Product/SubCategoryList';
import { BASE_URL } from '../../api/config';

function ProductList() {
  const [product, setProduct] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  const allArr = ['all1'];
  const medicineArr = [
    'category2',
    'subCategory7',
    'subCategory8',
    'subCategory9',
    'subCategory10',
    'subCategory11',
  ];
  const shaverArr = ['category3'];

  const { value, id } = useParams();

  useEffect(() => {
    const hasSubcate = value.length > 5;
    const appendedUrl = hasSubcate ? `${value}/${id}` : '';

    fetch(`${BASE_URL}/products/${appendedUrl}`)
      .then(response => response.json())
      .then(result => {
        setProduct(result.data);
        setLoading(false);
      });
  }, [value, id]);

  useEffect(() => {
    fetch(`/data/${value}${id}.json`)
      .then(result => result.json())
      .then(data => setSubCategory(data));
  }, [value, id]);

  if (loading) return;
  return (
    <div className="container">
      <div className="contents">
        <div className="advertisement">
          {allArr.includes(`${value}${id}`) ? (
            ''
          ) : medicineArr.includes(`${value}${id}`) ? (
            <img className="ad" src="/images/ad1.jpeg" alt="영양제" />
          ) : shaverArr.includes(`${value}${id}`) ? (
            <img className="ad" src="/images/ad2.jpeg" alt="면도/제모용품" />
          ) : (
            <img className="ad" src="/images/ad3.jpeg" alt="스킨케어" />
          )}
        </div>

        {allArr.includes(`${value}${id}`) ? (
          <div className="listTitle">전체보기</div>
        ) : medicineArr.includes(`${value}${id}`) ? (
          <div className="listTitle">영양제</div>
        ) : shaverArr.includes(`${value}${id}`) ? (
          <div className="listTitle">면도/제모용품</div>
        ) : (
          <div className="listTitle">스킨케어</div>
        )}

        {subCategory.length > 1 && (
          <div className="subCategoryBox">
            <ul>
              {subCategory.map(subCategories => {
                return (
                  <SubCategoryList
                    key={subCategories.id}
                    name={subCategories.name}
                    url={subCategories.url}
                  />
                );
              })}
            </ul>
          </div>
        )}
        <div className="productListBox">
          <div className="productListMenu">
            총 {product.length}개
            <select className="sorting">
              <option value="newProduct">신상품</option>
              <option value="highPriceProduct">높은가격</option>
              <option value="lowPriceProduct">낮은가격</option>
              <option value="bestProduct">인기상품</option>
            </select>
          </div>
          <div className="productList">
            <ul>
              {product.map(products => {
                return (
                  <li key={products.id}>
                    <ProductCard
                      id={products.id}
                      thumbnailImageUrl={products.thumbnailImageUrl}
                      name={products.name}
                      price={products.price}
                      description={products.description}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
