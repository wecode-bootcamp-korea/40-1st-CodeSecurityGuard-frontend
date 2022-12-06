import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const disabled = !(email.includes('@') && password.length >= 5);

  const onChangeEmail = e => {
    setEmail(e.target.value);
    console.log(email);
  };
  console.log('email:', email);

  const onChangePassword = e => {
    setPassword(e.target.value);
  };
  console.log('password:', password);

  return (
    <div className="login_wrap">
      <input
        className="input_email"
        type="text"
        value={email}
        placeholder="이메일을 입력해주세요"
        onChange={onChangeEmail}
      />

      <input
        className="input_password"
        type="password"
        value={password}
        placeholder="비밀번호를 입력해주세요"
        onChange={onChangePassword}
      />
      <button className="signin_button">로그인</button>
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
  );
}

export default Login;
