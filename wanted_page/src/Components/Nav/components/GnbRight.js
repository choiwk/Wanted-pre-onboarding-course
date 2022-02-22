import React from 'react';
import { IconContext } from 'react-icons';
import { VscBell, VscSearch } from 'react-icons/vsc';
import { BsThreeDots } from 'react-icons/bs';

class GnbRight extends React.Component {
  render() {
    return (
      <IconContext.Provider value={{ size: '1.2em' }}>
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
            <div className="lg-only contour"> | </div>
            <div className="companyBtn-border">
              <button
                className="lg-only gnb-icon-button companyBtn"
                type="button"
                aria-label="기업정보 버튼"
              >
                기업 서비스
              </button>
            </div>

            <button
              className="lg-hidden gnb-icon-button"
              type="button"
              aria-label="menuButton"
            >
              <BsThreeDots />
            </button>
          </div>
        </div>
      </IconContext.Provider>
    );
  }
}

export default GnbRight;
