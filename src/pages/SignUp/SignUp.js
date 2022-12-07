import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './SignUp.scss';

//mixin 먼저 쓰지 말고 리팩토링 할 때 써보기

// 회원가입 요소 인풋창 먼저 만들고
// 각각 조건이 있기 때문에 각 input class 만들어줘야함

const SignUp = () => {
  return (
    <div className="signUp">
      {/* ㅇ */}
      <div className="signupTop">
        <h2 className="signupTitle">회원가입</h2>
        <h3 className="signupSubtitle">기본정보</h3>
        <p className="signupRequired">필수입력사항</p>
      </div>
      {/* ㅐ */}
      <div className="inputWrap">
        <table className="signupInputWrap">
          {/* 사이 띄워줌 */}
          <colgroup>
            <col width="30%" />
            <col width="auto" />
          </colgroup>
          <tbody>
            {/* tr = table row : 각 줄 단위로 통일된 방식으로 정렬, 색상 지정 */}
            <tr className="signUpInputEmail">
              {/* th = table head : 셀이 제목 */}
              <th>
                <span>아이디</span>
              </th>
              <td>
                <input type="text" placeholder="이메일을 입력해주세요" />
              </td>
            </tr>
            <tr className="signUpInputPassword">
              <th>
                <span>비밀번호</span>
              </th>
              <td>
                <input type="text" placeholder="비밀번호를 입력하세요." />
              </td>
            </tr>
            <tr className="signUpInputCheckPassword">
              <th>
                <span>비밀번호 확인</span>
              </th>
              <td>
                <input
                  type="text"
                  placeholder="비밀번호를 한번 더 입력해주세요"
                />
              </td>
            </tr>
            <tr className="signUpInputName">
              <th>
                <span>이름</span>
              </th>
              <td>
                <input type="text" placeholder="실명으로 기입해주세요" />
              </td>
            </tr>
            <tr className="signUpInputAdress">
              <th>
                <span>주소</span>
              </th>
              <td>
                <input type="text" placeholder="시 / 도 / 군・구 / 상세주소" />
              </td>
            </tr>
            <tr className="signUpInputMobile">
              <th>
                <span>휴대전화</span>
              </th>
              <td className="mobileInfo">
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
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <table>
        <colgroup>
          <col width="30%" />
          <col width="auto" />
        </colgroup>
        <tbody>
          <tr className="checkbox_wrap">
            {/* th = table head : 셀이 제목 */}
            <th>
              <span>이용약관동의</span>
            </th>
            <td>
              <input classname="agreeCheckbox" type="checkbox" />
              <label for="news_letter">[선택] 동의합니다 </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SignUp;
