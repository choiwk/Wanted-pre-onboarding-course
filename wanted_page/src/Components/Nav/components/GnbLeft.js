import React from 'react';

const GnbLeft = () => {
  return (
    <>
      <div className="gnb-left">
        <h2 className="visually-hidden">메뉴</h2>
        <ul className="gnb-nav-list">
          <li className="sm-only gnb-nav-item">
            <a href="#!">홈</a>
          </li>
          <li className="gnb-nav-item">
            <a href="#!">채용</a>
          </li>
          <li className="gnb-nav-item">
            <a href="#!">이벤트</a>
          </li>
          <li className="sm-hidden gnb-nav-item">
            <a href="#!">직군별 연봉</a>
          </li>
          <li className="sm-hidden gnb-nav-item">
            <a href="#!">이력서</a>
          </li>
          <li className="sm-hidden gnb-nav-item">
            <a href="#!">커뮤니티</a>
          </li>
          <li className="sm-hidden gnb-nav-item">
            <a href="#!">프리랜서</a>
          </li>
          <li className="sm-hidden gnb-nav-item">
            <a href="#!">AI 합격예측</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default GnbLeft;
