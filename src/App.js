import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import TopBar from './components/TopBar';
import Login from './components/Login';
import EmailLogin from './components/EmailLogin';
import KakaoLogin from './components/KakaoLogin';
import NaverLogin from './components/NaverLogin';

function App() {
  const [showTopBar, setShowTopBar] = useState(true);  // TopBar 표시 여부

  return (
    <Router>
      <RouteContent showTopBar={showTopBar} setShowTopBar={setShowTopBar} />
    </Router>
  );
}

function RouteContent({ showTopBar, setShowTopBar }) {
  const location = useLocation();  // 현재 경로를 가져옵니다.

  useEffect(() => {
    // 로그인 관련 페이지에서는 TopBar 숨기기
    if (location.pathname === '/login' || location.pathname === '/email-login' || location.pathname === '/kakao-login' || location.pathname === '/naver-login') {
      setShowTopBar(false);  // 로그인 페이지일 경우 TopBar 숨기기
    } else {
      setShowTopBar(true);  // 그 외 페이지에서는 TopBar 보이기
    }
  }, [location, setShowTopBar]);

  return (
    <>
      {showTopBar && <TopBar setShowTopBar={setShowTopBar} />} {/* TopBar 표시 여부 */}
      
      <Routes>
        <Route path="/" element={<MainPage />} />  {/* 메인 페이지 */}
        <Route path="/login" element={<Login />} />
        <Route path="/email-login" element={<EmailLogin />} />
        <Route path="/kakao-login" element={<KakaoLogin />} />
        <Route path="/naver-login" element={<NaverLogin />} />
      </Routes>
    </>
  );
}

function MainPage() {
  return (
    <div></div>
  );
}

export default App;
