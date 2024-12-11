import React from 'react';
import './LoginLogoPage.css';

function LoginLogoPage({ title }) {
  return (
    <div className="login-logo-page">
      <img
        src="/public/Image/coupangLogo.png"
        alt="Coupang Logo"
        className="coupang-logo"
      />
      <h1>{title}</h1>
    </div>
  );
}

export default LoginLogoPage;
