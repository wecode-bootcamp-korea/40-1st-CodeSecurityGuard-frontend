import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { api } from '../../api/config';
import './Login.scss';

function Login() {
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const onSubmit = () => {
    inputValues.email.includes('@') && inputValues.password.length >= 8
      ? signIn()
      : alert('이메일, 비밀번호를 올바르게 입력해주세요');
  };

  //TODO : api 요청 확인 시 이동 구현 필요 (이전페이지로 이동)
  //TODO : 회원가입 성공시 alert 창 띄우기 vs 바로 이전페이지로 넘기기
  const signIn = () => {
    fetch(api.login, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: inputValues.email,
        password: inputValues.password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.accessToken) {
          localStorage.setItem('token', data.accessToken);
          navigate('/productdetail');
        } else {
          alert('이메일, 비밀번호가 일치하지 않습니다');
        }
      });
  };

  const moveToSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="login">
      <div className="loginWrap">
        <input
          name="email"
          className="inputEmail"
          type="text"
          placeholder="이메일을 입력해주세요"
          value={inputValues.email}
          onChange={handleInput}
        />

        <input
          name="password"
          className="inputPassword"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={inputValues.password}
          onChange={handleInput}
        />
        <button className="signInButton" onClick={onSubmit}>
          로그인
        </button>
        <button className="signUpButton" onClick={moveToSignUp}>
          회원가입
        </button>
        <div className="findWrap">
          <div>
            <a className="findEmail">이메일 찾기</a>
          </div>
          <div>
            <a className="findAskPassword">비밀번호 찾기</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
