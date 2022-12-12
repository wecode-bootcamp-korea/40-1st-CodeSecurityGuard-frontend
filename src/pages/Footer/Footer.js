import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footMenuList">
        <Link to="#">로그인</Link>
        <Link to="#">고객센터</Link>
        <Link to="#">브랜드 스토리</Link>
        <Link to="#">블로그</Link>
        <Link to="#">인재채용</Link>
      </div>
      <hr />
      <div className="footerInfo">
        <div className="footerInfoLeft">
          <p className="footerInfoLeftP">(주)코드방범대</p>

          <p>
            서울시 강남구 테헤란로 427 위워크 타워(위워크 선릉 2호점)
            프로젝트매니져: 윤수인
          </p>
          <p>
            사업자 등록번호: 331-88-02937, 통신판매업신고번호:
            8282-서울강남-010684
          </p>
          <p>
            프로덕트매니져: 김영석 yeongseok0219@gmail.com, 고객센터: 5232-8852
          </p>
          <p>E-mail: help@codesecurityguard.com</p>
          <p>
            제휴문의:
            https://github.com/wecode-bootcamp-korea/40-1st-CodeSecurityGuard-frontend
          </p>
        </div>
        <div className="footerInfoRight">
          <div className="footerInfoRightKakaotalk">
            <img
              className="kakaotalkIcon"
              alt="카카오톡아이콘"
              src=".\images\kakaotalk-icon.svg"
            />
            <p className="kakaotalkChannel">카카오톡 채널 '코드방범대'</p>
          </div>
          <div className="companyInformation">
            <p className="companyNumber">고객센터 5232-8852</p>
            <div>
              <p className="companyLiveTime">[ 평일 ] 오전 9시 ~ 오후 6시</p>
              <p className="companyLiveTime">[ 점심시간 ] 오후 12시 ~ 1시</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footerNoticeList">
        <div className="footerNoticeItem">
          <Link to="#">개인정보처리방침</Link>
          <div className="vLine" />
          <Link to="#">이용안내</Link>
          <div className="vLine" />
          <Link to="#">사업자정보확인</Link>
          <div className="vLine" />
          <Link to="#">이용약관</Link>
          <div className="vLine" />
          <Link to="#">이메일무단수집거부</Link>
        </div>
        <span>
          ©2018-2022. <b>CodeSecurityGuard</b> All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
