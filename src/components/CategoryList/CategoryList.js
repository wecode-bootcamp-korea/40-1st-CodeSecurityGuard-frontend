import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CategoryList.scss';

const CategoryList = props => {
  const [mainNameList, setMainNameList] = useState([]);
  const [currentId, setCurrentId] = useState(0);
  const onMouseEnterTab = id => e => setCurrentId(id);

  useEffect(() => {
    fetch('/data/categoryList.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setMainNameList(data);
      });
  }, []);

  return (
    <div className="navCategoryWrap">
      <div className="categoryList">
        <ul className="categoryListMain">
          {mainNameList.map(({ id, icon, mainname, subcategory, url }) => {
            return (
              <li
                className="mainCategory"
                key={id}
                data={mainname}
                onMouseEnter={onMouseEnterTab(id)}
              >
                <div className="mainNameIcon">
                  <Link to={`${url}`} onClick="window.location.reload()">
                    <img key={id} src={icon} alt={mainname} />
                  </Link>
                </div>
                <div className="mainNameWrapper">
                  <Link to={`${url}`} onClick="window.location.reload()">
                    {mainname}
                  </Link>
                </div>
                <ul className="categoryListSub">
                  {currentId === id &&
                    subcategory?.map(({ id, name }) => {
                      return (
                        <li className="subCategory" key={id} data={name}>
                          <Link
                            to={`${url}`}
                            onClick="window.location.reload()"
                          >
                            {name}
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default CategoryList;
