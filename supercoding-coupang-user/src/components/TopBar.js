import React from 'react';
import { Link } from 'react-router-dom';
import "./TopBar.css"

const TopBar = ({ setShowTopBar }) => {
  const handleLoginClick = () => {
    setShowTopBar(false);  // 로그인 클릭 시 TopBar 숨기기
  };

  return (
    <div className="top-bar">
      <div className="left">
        <Link to="/"><button>즐겨찾기</button></Link>
        <Link to="/"><button>입점 찾기</button></Link>
      </div>
      <div className="right">
        <Link to="/login">
          <button onClick={handleLoginClick}>로그인</button>
        </Link>
        <Link to="/signup"><button>회원가입</button></Link>
        <Link to="/customer-service"><button>고객센터</button></Link>
        <Link to="/seller-signup"><button>판매자 가입</button></Link>
      </div>
    </div>
  );
};

export default TopBar;
