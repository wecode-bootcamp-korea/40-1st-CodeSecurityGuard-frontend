import React, { useEffect, useState } from 'react';
import './Nav2.scss';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [currentId, setCurrentId] = [];

  useEffect(() => {
    fetch('/data/categoryList.json', { method: 'GET' })
      .then(response => response.json())
      .then(result => {
        setCategoryList(result);
      });
  }, []);
  return (
    <div className="navBox">
      <header>
        <div className="headerElement">
          <ul className="headerLink">
            <li className="signUpLink">
              <Link to="#">회원가입</Link>
            </li>
            <li className="loginLink">
              <Link to="#">로그인</Link>
            </li>
          </ul>
          <form className="searchBarForm">
            <div className="weselyLogo">
              <li>
                <Link to="#">WESELY</Link>
              </li>
            </div>
            <div className="headerSearchBox">
              <input id="search" className="searchInput" type="text" />
              <Link to="#">
                <img src="/images/loupe.png" alt="돋보기" />
              </Link>
            </div>
            <div className="cartButtonWrapper">
              <Link to="#">
                <img src="/images/shopping-cart.png" alt="장바구니" />
              </Link>
            </div>
          </form>
        </div>
      </header>
      <nav className="navWrapper">
        <div className="navLeft">
          <img src="/images/menu.png" alt="메뉴" />
          <span>카테고리</span>
          {/* categoryList는 객체상태의 요소가 들어있는 배열형태의 data */}
          <div className="dropDown">
            <div className="dropdownMainWrap">
              {/* 첫번째 카테고리 부분 */}
              <ul className="dropdownFirtUl">
                {categoryList.map(({ cate, mainmenu, subcategory }) => {
                  return (
                    <FirstSec
                      key={cate}
                      id={cate}
                      data={mainmenu}
                      // onEnter props 로 함수 전달하고 currentId 가져옴
                      onEnter={() => setCurrentId(cate)}
                    />
                  );
                })}
              </ul>
            </div>
            {/* 2차 카테고리 */}
            <div className="dropdownSecondWrap">
              <ul className="dropdownSecondUI">
                {/* 1차 map */}
                {categoryList.map(({ cate, subcategory }) => {
                  return (
                    <div key={cate}>
                      {/* 2차 map
                      관련된 data만 나와야 하기 떄문에 현재 Id(cate)와 onEnter으로 가져온 currentId 
                      값을 비교해서 같을 때만 2차 카테고리 나오게 설정 */}
                      {cate === setCurrentId &&
                        subcategory.map(({ cate, name }) => {
                          return (
                            <FisrtSec
                              key={cate}
                              id={cate}
                              data={name}
                              setId={setId}
                              // 2차 카테고리의 id값을 따로 뻬주기 위해 다른 state로 저장(openCategory라는 이름의  state)
                              onEnter={() => setOpenCategory(cate)}
                            />
                          );
                        })}
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="tabMenuWrapper">
          <ul className="tabMenu">
            <li className="recommendLink">
              <Link to="#">추천</Link>
            </li>
            <li className="newProductLink">
              <Link to="#">신제품</Link>
            </li>
            <li className="bestProductLink">
              <Link to="#">베스트</Link>
            </li>
          </ul>
        </div>
        <div className="rightMenuWrapper" />
      </nav>
    </div>
  );
};

export default Nav;
