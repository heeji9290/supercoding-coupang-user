import React, { useState } from 'react';
import EmailLogin from './EmailLogin'; // 이메일 로그인 컴포넌트
import './Login.css';

const Login = () => {
  const [showEmailLogin, setShowEmailLogin] = useState(false); // 이메일 로그인 컴포넌트 표시 상태

  // 이메일 로그인 버튼 클릭 시
  const handleEmailLoginClick = () => {
    setShowEmailLogin(true);  // 이메일 로그인 컴포넌트 보이기
  };

  return (
    <div className="login-page">
      <div className="logo-container">
        <div className="logo"></div>
      </div>
      
      {/* 로그인 옵션 */}
      <div className="login-options">
        <button onClick={handleEmailLoginClick} className="login-option">
          이메일 로그인
        </button>
        <button className="login-option">카카오톡 로그인</button>
        <button className="login-option">네이버 로그인</button>
      </div>

      {/* 이메일 로그인 컴포넌트 조건부 렌더링 */}
      {showEmailLogin && <EmailLogin />}
    </div>
  );
};

export default Login;
