import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './SignUp.scss';

const SignUp = () => {
  return (
    <div className="signUp">
      <div className="signupTop">
        <h2 className="signupTitle">회원가입</h2>
        <h3 className="signupSubtitle">기본정보</h3>
        <p className="signupRequired">필수입력사항</p>
      </div>

      <div className="userInfo" />

      {USER_FORM.map(info => {
        return (
          <div className="form" key={info.id}>
            <div className="formTitle">{info.formTitle}</div>
            <input className="formInput" placeholder={info.placeholder} />
          </div>
        );
      })}

      <div className="signUpInputMobile">
        <div className="phonNumberTitle">휴대전화</div>

        <div className="mobileInfo">
          <select className="mobileFirst">
            <option value="010">010</option>
            <option value="010">011</option>
            <option value="010">016</option>
            <option value="010">017</option>
            <option value="010">018</option>
            <option value="010">019</option>
          </select>
          -
          <input
            className="mobileCenter"
            type="text"
            placeholder="0000"
            maxLength="4"
          />
          -
          <input
            className="mobileLast"
            type="text"
            placeholder="0000"
            maxLength="4"
          />
        </div>
      </div>

      <div className="agreeWrap">
        {/* th = table head : 셀이 제목 */}
        <div className="agreeTitle">이용약관동의</div>

        <input classname="checkbox" type="checkbox" />
        <label>동의합니다 </label>
      </div>

      <div className="signupBox">
        <button className="signupButton">가입하기</button>
      </div>
    </div>
  );
};

export default SignUp;

const USER_FORM = [
  { id: 1, formTitle: '이메일', placeholder: '이메일을 입력해주세요' },
  { id: 2, formTitle: '비밀번호', placeholder: '비밀번호를 입력해주세요' },
  {
    id: 3,
    formTitle: '비밀번호 확인',
    placeholder: '비밀번호를 한번 더 입력해주세요',
  },
  { id: 4, formTitle: '이름', placeholder: '실명으로 기입해주세요' },
  { id: 5, formTitle: '주소', placeholder: '시 / 도 / 군・구 / 상세주소' },
];
