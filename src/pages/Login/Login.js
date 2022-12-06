import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const LoginInput = () => {
    const [inputValues, setInputValues] = useState({
      email: '',
      password: '',
    });
  };

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const activateButton = () => {
    const isValid =
      LoginInput.email.includes('@') && LoginInput.password.length >= 5;
    setIsValid(isValid);
  };

  return (
    <div className="login">
      <div className="login_wrap">
        <input
          className="input_email"
          type="text"
          placeholder="이메일을 입력해주세요"
          value={inputValues}
          onChange={handleInput}
        />

        <input
          className="input_password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={inputValues}
          onChange={handleInput}
        />
        <button className="signin_button" onClick={activateButton}>
          로그인
        </button>
        <button className="signup_button">회원가입</button>

        <div className="find_wrap">
          <div>
            <a class="find_email">이메일 찾기</a>
          </div>
          <div>
            <a class="find_askpassword">비밀번호 찾기</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
