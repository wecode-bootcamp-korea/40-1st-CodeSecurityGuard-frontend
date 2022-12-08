import React from 'react';
import { CATEGORY_INFO_LIST } from './categoryInfoList';
import './CategoryList.scss';

const CategoryList = props => {
  return (
    <div className="navCategoryWrap">
      <div className="categoryList">
        <ul className="categoryListMain">
          {CATEGORY_INFO_LIST.map(categoryInfoList => {
            return <li key={categoryInfoList.id}>{categoryInfoList.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
export default CategoryList;
