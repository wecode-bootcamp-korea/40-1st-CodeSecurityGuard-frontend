import React, { useState } from 'react';
import './Nav.scss';
import CategoryList from '../CategoryList/CategoryList';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="nav">
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
                <Link to="/Main">
                  <img src="/images/WESELY-logo.png" alt="WESELY" />
                </Link>
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
        <div className="navWrapper">
          <div
            className="categoryWrapper"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <div className="navLeft">
              <img src="/images/menu.png" alt="메뉴" />
              <span>카테고리</span>
            </div>
            <div className="navCategory">{isOpen && <CategoryList />}</div>
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
        </div>
      </div>
    </nav>
  );
};

export default Nav;
