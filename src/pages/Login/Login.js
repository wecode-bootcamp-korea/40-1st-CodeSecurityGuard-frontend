import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  //입력되는 값 받아오기 위해서 usestate 사용
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInput = event => {
    //input 의 name 가진 요소의 value에 이벤트 걸기
    const { name, value } = event.target;
    //스프레드 문법으로 모든 기존 객체를 복사
    //만든 변수 -> setInputvalues으로 변경
    setInputValues({ ...inputValues, [name]: value });
  };
  console.log('이메일:', inputValues.email, '패스워드', inputValues.password);

  // console.log({ handleInput });

  //조건확인
  const onSubmit = () => {
    inputValues.email.includes('@') && inputValues.password.length >= 8
      ? //이번페이지로 이동 구현해야함
        navigate('/productdetail')
      : alert('아이디와 비밀번호를 확인해주세요.');
  };

  return (
    <div className="login">
      <div className="login_wrap">
        <input
          //위에서 email의 값을 가져와 타겟 가져오기
          name="email"
          className="input_email"
          type="text"
          placeholder="이메일을 입력해주세요"
          value={inputValues.email}
          onChange={handleInput}
        />

        <input
          //위에서 password의 값을 가져와 타겟으로 가져옴
          name="password"
          className="input_password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={inputValues.password}
          onChange={handleInput}
        />
        {/* 이벤트 관련 함수명 은 'on~' 로 해보기 */}
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
