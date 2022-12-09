import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
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

  //TODO : api 요청 확인 시 이동 구현 필요 (이전페이지로 이동)
  const onSubmit = () => {
    inputValues.email.includes('@') && inputValues.password.length >= 8
      ? navigate('/productdetail')
      : alert('아이디와 비밀번호를 확인해주세요.');
  };

  return (
    <div className="login">
      <div className="login_wrap">
        <input
          name="email"
          className="input_email"
          type="text"
          placeholder="이메일을 입력해주세요"
          value={inputValues.email}
          onChange={handleInput}
        />

        <input
          name="password"
          className="input_password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={inputValues.password}
          onChange={handleInput}
        />
        <button className="signin_button" onClick={onSubmit}>
          로그인
        </button>
        <button className="signup_button">회원가입</button>

        <div className="find_wrap">
          <div>
            <a className="find_email">이메일 찾기</a>
          </div>
          <div>
            <a className="find_askpassword">비밀번호 찾기</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
