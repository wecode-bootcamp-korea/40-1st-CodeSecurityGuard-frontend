import React, { useState, useEffect } from 'react';
import './CategoryList.scss';

const CategoryList = props => {
  const [mainNameList, setMainNameList] = useState([]);
  const [currentId, setCurrentId] = useState(0);

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
          {mainNameList.map(({ id, icon, mainname, subcategory }) => {
            return (
              <li
                className="mainCategory"
                key={id}
                data={mainname}
                onMouseEnter={() => setCurrentId(id)}
              >
                <div className="mainNameIcon">
                  <img key={id} src={icon} alt={mainname} />
                </div>
                <div className="mainNameWrapper">{mainname}</div>
                {currentId === id && subcategory && (
                  <ul className="categoryListSub">
                    {subcategory.map(({ id, name }) => {
                      return (
                        <li className="subCategory" key={id} data={name}>
                          {name}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default CategoryList;
