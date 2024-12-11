import React from 'react';

function NaverLogin() {
  return (
    <div className="login-page">
      <div className="logo">
        <img src="/public/Image/coupangLogo.png" alt="Coupang Logo" />
      </div>
      <div className="login-options">
        <button className="login-option">이메일 로그인</button>
        <button className="login-option">카카오톡 로그인</button>
        <button className="login-option">네이버 로그인</button>
      </div>
    </div>
  );
}

export default NaverLogin;
