import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //🌟로그인 통과 함수 (조건에 맞아야만- 데이터 넘겨서 이메일, 비밀번호 맞는지 확인해줌)
  const disabled = !(email.includes('@') && password.length >= 5);

  //이벤트 참조 값으로 바꾸어주는 함수
  const onChangeEmail = e => {
    setEmail(e.target.value);
    console.log(email);
  };
  console.log('email:', email);

  const onChangePassword = e => {
    setPassword(e.target.value);
  };
  console.log('password:', password);

  //버튼 활성화 되었을 때 email.pw 확인 -> 로그인 성공 혹은 실패(alert)
  const signin = useEffect;

  useEffect(() => {
    fetch('http://localhost:3000/data/loginData.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        // if (response.message === '') {
        //   alert('아이디 또는 비밀번호가 맞지 않습니다.');
        // } else if (response.message === '백엔드 메시지') {
        //   Navigate('직전화면');
        // }
        console.log([]);
      });
  }, []);

  return (
    <div className="login_wrap">
      <input
        className="input_email"
        type="text"
        value={email}
        //setstate 로 받아오는 값을 받음
        placeholder="이메일을 입력해주세요"
        onChange={onChangeEmail}
        //이벤트 객체의 value 값을 받아온다는 함수를 넣기
        //키가 눌려지고 떼었을 때 ->함수실행-> 입력정보확인 ? 활성화 : 비활성화
      />

      <input
        className="input_password"
        type="password"
        value={password}
        //setstate 로 받아오는 값을 받음
        placeholder="비밀번호를 입력해주세요"
        onChange={onChangePassword}
        //키가 눌려지고 떼었을 때 ->함수실행-> 입력정보확인 ? fetch 실행 : 비실행
      />

      {/* 버튼 누를 시 경우
      1. 조건충족 안됨 -> 버튼 비활성 및 alert 이메일 또는 비밀번호를 확인해주세요
      2. 조건충족 완료 -> 버튼 활성 -> 데이터 확인 
      -> 로그인 된 상태에서 직전 화면으로 이동 or 이메일 또는 비밀번호가 일치하지 않습니다 */}

      <button className="signin_button" onClick={signin} disabled>
        로그인
      </button>
      {/* onClick={signup} 넣어줘야 함 */}
      <button className="signup_button">회원가입</button>

      <div className="find_wrap">
        <div>
          {/* 기능 없이 만들어만 두었습니다. */}
          <a class="find_email">이메일 찾기</a>
        </div>
        <div>
          <a class="find_askpassword">비밀번호 찾기</a>
        </div>
      </div>
    </div>
  );
}
