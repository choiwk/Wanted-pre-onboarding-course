import React from 'react';
import { IconContext } from 'react-icons';
import { VscBell, VscSearch } from 'react-icons/vsc';
import { BsList, BsThreeDots } from 'react-icons/bs';

const Nav = () => {
  return (
    <IconContext.Provider value={{ size: '1.2em' }}>
      <header className="gnb">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="gnb-main">
                <button
                  className="gnb-icon-button"
                  type="button"
                  aria-label="메뉴 열기 버튼"
                >
                  <BsList size="1.6em" />
                </button>
                <h1 className="logoName">wanted</h1>
              </div>
              <nav className="gnb-nav">
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

                <div className="gnb-right">
                  <div className="gnb-button-group">
                    <button
                      className="gnb-icon-button"
                      type="button"
                      aria-label="검색창"
                    >
                      <VscSearch />
                    </button>
                    <button
                      className="gnb-icon-button"
                      type="button"
                      aria-label="알림 버튼"
                    >
                      <VscBell />
                    </button>
                    <button
                      className="lg-only gnb-avator-button"
                      type="button"
                      aria-label="마이메뉴 열기 버튼"
                    >
                      <div className=" myMenu-avator">
                        <img
                          src="https://w.namu.la/s/ccf60cdc6cc55d8ed26841a7eb7363c6b026845a584d70141e14c202b1dbdb5b81ecd1292f6881435ccfa6fc16e7731cea6a7f7afa6763842623a49f2ac65e72f972951e160eb536de050761f16b058e7f0a75a2a92b886e8ffa6a73ffcee394"
                          alt="avator"
                        />
                      </div>
                    </button>
                    <button
                      className="lg-only gnb-icon-button"
                      type="button"
                      aria-label="기업정보 버튼"
                    >
                      기업 서비스
                    </button>
                    <button
                      className="lg-hidden gnb-icon-button"
                      type="button"
                      aria-label="menuButton"
                    >
                      <BsThreeDots />
                    </button>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </IconContext.Provider>
  );
};

export default Nav;
