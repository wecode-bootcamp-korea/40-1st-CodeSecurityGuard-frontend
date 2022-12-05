import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div class="footer">
      <div class="footerarea1">
        <a href="">로그인</a>
        <a href="">고객센터</a>
        <a href="">브랜드 스토리</a>
        <a href="">블로그</a>
        <a href="">인재채용</a>
      </div>
      <hr />
      <div class="footerarea2">
        <div class="footerarea2-1">
          <p class="footerarea2-1-p">(주)와이즐리컴퍼니 사업자정보</p>

          <p>
            서울특별시 강남구 영동대로 96길 20, 5층(삼성동, 대화빌딩) 대표자:
            김동욱
          </p>
          <p>
            사업자 등록번호: 344-88-00965, 통신판매업신고번호:
            2020-서울강남-02333
          </p>
          <p>
            개인정보보호책임자: 김윤호 yhkim@wiselycompany.com, 고객센터:
            1833-9133
          </p>
          <p>E-mail: help@wiselycompany.com</p>
          <p>제휴문의: jjoak@wiselycompany.com</p>
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
          <a href="">개인정보처리방침</a>
          <hr />
          <a href="">이용안내</a>
          <hr />
          <a href="">사업자정보확인</a>
          <hr />
          <a href="">이용약관</a>
          <hr />
          <a href="">이메일무단수집거부</a>
        </div>
        <span>
          ©2018-2022. <b>WISELYCOMPANY</b> All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
