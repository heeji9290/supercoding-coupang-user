import React, { useState } from 'react';
import './EmailLogin.css';

function EmailLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [autoLogin, setAutoLogin] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError('아이디(이메일)를 입력해주세요.');
    } else {
      setEmailError('');
    }
    if (!password) {
      setPasswordError('비밀번호를 입력해주세요.');
    } else {
      setPasswordError('');
    }

    if (email && password) {
      alert('로그인 성공');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="input-container">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => {
              // 이메일 입력 여부 확인
              if (!email) {
                setEmailError('아이디(이메일)를 입력해주세요.');
              } else {
                setEmailError('');
              }
            }}
            placeholder="아이디(이메일)"
            className={`email-input ${emailError ? 'error' : ''}`}
          />
          {emailError && <p className="error">{emailError}</p>}
        </div>
        
        <div className="input-container">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => {
              // 비밀번호 입력 여부 확인
              if (!password) {
                setPasswordError('비밀번호를 입력해주세요.');
              } else {
                setPasswordError('');
              }
            }}
            placeholder="비밀번호"
            className={`password-input ${passwordError ? 'error' : ''}`}
          />
          {passwordError && <p className="error">{passwordError}</p>}
        </div>

        <div className="auto-login">
          <input
            type="checkbox"
            checked={autoLogin}
            onChange={() => setAutoLogin(!autoLogin)}
          />
          <label>자동 로그인</label>
          <label>아이디 • 비밀번호 찾기</label>
        </div>

        <button type="submit" className="login-btn">로그인</button>
      </form>
      <hr />
      <div className="signup-link">
        <button className="signup-btn">회원가입</button>
      </div>

      <div className="business-link">
        <p className="customer">법인 고객이신가요?</p>
        <p className="customer">사업자 회원으로 전용 특가 혜택을 누려보세요.</p>
        <p className="easy-signup">쿠팡비즈 간편가입</p>
      </div>

      <div className='companyname'>
        Coupang Corp. All rights reserved.
      </div>
    </div>
  </div>
  );
};


export default EmailLogin;
