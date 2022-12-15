import React from 'react';
import { Link } from 'react-router-dom';
import './SubCategoryList.scss';

function CategoryList(props) {
  const { url, name } = props;

  return (
    <div className="categoryName">
      <Link to={`${url}`} onClick="window.location.reload()">
        {name}
      </Link>
    </div>
  );
}

export default CategoryList;
