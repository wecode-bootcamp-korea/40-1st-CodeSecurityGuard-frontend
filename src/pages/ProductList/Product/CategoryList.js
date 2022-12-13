import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryList.scss';

function CategoryList(props) {
  const { url, name } = props;

  return (
    <div className="CategoryName">
      <Link to={`/productlist/${url}`} onClick="window.location.reload()">
        {name}
      </Link>
    </div>
  );
}

export default CategoryList;
