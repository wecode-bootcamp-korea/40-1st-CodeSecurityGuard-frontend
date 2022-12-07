import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <div class="footer">
      <div class="footerarea1">
        <Link to="/Product">로그인</Link>
        <Link to="/Product">고객센터</Link>
        <Link to="/Product">브랜드 스토리</Link>
        <Link to="/Product">블로그</Link>
        <Link to="/Product">인재채용</Link>
      </div>
      <hr />
      <div class="footerarea2">
        <div class="footerarea2-1">
          <p class="footerarea2-1-p">(주)코드방범대</p>

          <p>
            서울시 강남구 테헤란로 427 위워크 타워(위워크 선릉 2호점)
            프로젝트매니져: 윤수인
          </p>
          <p>
            사업자 등록번호: 331-88-02937, 통신판매업신고번호:
            8282-서울강남-010684
          </p>
          <p>
            프로덕트매니져: 김영석 yeongseok0219@gmail.com, 고객센터: 1833-9133
          </p>
          <p>E-mail: help@codesecurityguard.com</p>
          <p>
            제휴문의:
            https://github.com/wecode-bootcamp-korea/40-1st-CodeSecurityGuard-frontend
          </p>
        </div>
        <div class="footerarea2-2">
          <div class="footerarea2-2-1">
            <img
              class="kakaotalk-icon"
              alt="카카오톡아이콘"
              src="https://wiselycompany.com/SkinImg/img/icon_kakaotalk_fff.svg"
            />
            <p class="kakaotalk-channel">카카오톡 채널 '와이즐리컴퍼니'</p>
          </div>
          <div class="company-information">
            <p class="company-number">고객센터 1833-9133</p>
            <div>
              <p class="company-live-time">[ 평일 ] 오전 9시 ~ 오후 6시</p>
              <p class="company-live-time">[ 점심시간 ] 오후 12시 ~ 1시</p>
            </div>
          </div>
        </div>
      </div>
      <div class="footerarea3">
        <div class="footerarea3-1">
          <Link to="/Product">개인정보처리방침</Link>
          <div class="v-line" />
          <Link to="/Product">이용안내</Link>
          <div class="v-line" />
          <Link to="/Product">사업자정보확인</Link>
          <div class="v-line" />
          <Link to="/Product">이용약관</Link>
          <div class="v-line" />
          <Link to="/Product">이메일무단수집거부</Link>
        </div>
        <span>
          ©2018-2022. <b>CodeSecurityGuard</b> All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
