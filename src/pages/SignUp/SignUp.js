import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './SignUp.scss';

const SignUp = () => {
  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
    checkPassword: '',
    userName: '',
    address: '',
    phoneNumberCenter: '',
    phoneNumberLast: '',
  });

  const handleForm = e => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const emailRegExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,12}$/;

  const isAllValid =
    formValue.password === formValue.passwordCheck &&
    formValue.userName.length >= 2 &&
    formValue.address.length === 5 &&
    formValue.phoneNumberCenter.length === 4 &&
    formValue.phoneNumberLast.length === 4;

  const onSignUp = e => {
    e.preventDefault();
    fetch('http://10.58.52.239:8000/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: formValue.email,
        password: formValue.password,
        name: formValue.userName,
        address: formValue.address,
        phoneNumber: [
          '010',
          formValue.phoneNumberCenter,
          formValue.phoneNumberLast,
        ].join(''),
      }),
    })
      .then(response => response.json())

      .then(data => {
        if (data.message === 'USER_CREATED') {
          return (
            alert('회원가입 되었습니다!'),
            navigate('/login'),
            localStorage.setItem('token', data.accessToken)
          );
        } else {
          alert('회원가입에 실패했습니다!');
        }
      });
  };
  return (
    <div className="signUpWrap">
      <div className="signUpTop">
        <h2 className="signUpTitle">회원가입</h2>
        <h3 className="signUpSubtitle">기본정보</h3>
        <p className="signUpRequired">필수입력사항</p>
      </div>

      {/* TODO : input 아래 p태그로 유효성 검사결과 추가구현 예정 */}
      <div className="userInfo">
        {USER_FORM.map(info => {
          return (
            <div className="form" key={info.id}>
              <div className="formTitle">{info.formTitle}</div>
              <input
                //TODO : password type:password 로 변경예정 (유효성검사 위해)
                name={info.name}
                value={formValue.name}
                className="formInput"
                placeholder={info.placeholder}
                onChange={handleForm}
              />
            </div>
          );
        })}
      </div>

      <div className="PhoneNumberWrap">
        <div className="phoneNumberTitle">휴대전화</div>

        <div className="phoneNumberInfo">
          <select className="phoneNumberFirst">
            <option value="010">010</option>
            <option value="010">011</option>
            <option value="010">016</option>
            <option value="010">017</option>
            <option value="010">018</option>
            <option value="010">019</option>
          </select>
          -
          <input
            className="phoneNumberCenter"
            name="phoneNumberCenter"
            type="text"
            value={formValue.phoneNumberCenter}
            onChange={handleForm}
            placeholder="0000"
            maxLength="4"
          />
          -
          <input
            className="phoneNumberLast"
            name="phoneNumberLast"
            type="text"
            value={formValue.phoneNumberLast}
            onChange={handleForm}
            placeholder="0000"
            maxLength="4"
          />
        </div>
      </div>
      {/* TODO : 체크박스 체크 시 버튼활성화 추가구현 예정 */}
      <div className="agreeWrap">
        <div className="agreeTitle">이용약관동의</div>
        <input className="checkbox" type="checkbox" />

        <label>동의합니다 </label>
      </div>

      <div className="submitWrap">
        <button
          className="submitButton"
          disabled={
            !emailRegExp.test(formValue.email) &&
            !passwordRegExp.test(formValue.password) &&
            !isAllValid
          }
          onClick={onSignUp}
        >
          가입하기
        </button>
      </div>
    </div>
  );
};

export default SignUp;

const USER_FORM = [
  {
    id: 1,
    name: 'email',
    formTitle: '이메일',
    placeholder: '이메일을 입력해주세요',
  },
  {
    id: 2,
    name: 'password',
    formTitle: '비밀번호',
    placeholder: '숫자,소문자,대문자,특수문자가 최소 1개 포함/ 8~12 글자',
  },
  {
    id: 3,
    name: 'passwordCheck',
    formTitle: '비밀번호 확인',
    placeholder: '비밀번호를 한번 더 입력해주세요',
  },
  {
    id: 4,
    name: 'userName',
    formTitle: '이름',
    placeholder: '실명으로 기입해주세요',
  },
  {
    id: 5,
    name: 'address',
    formTitle: '주소',
    placeholder: '시 / 도 / 군・구 / 상세주소',
  },
];
