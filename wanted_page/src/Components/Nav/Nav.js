import React from 'react';
import { IconContext } from 'react-icons';
import { BsList } from 'react-icons/bs';
import NavLg from './components/NavLg';
import GnbLeft from './components/GnbLeft';
import GnbRight from './components/GnbRight';

class Nav extends React.Component {
  render() {
    return (
      <IconContext.Provider value={{ size: '1.2em' }}>
        <header className="gnb">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="gnb-main lg-only">
                  <div className="main-logo ">
                    <button
                      className="gnb-icon-button"
                      type="button"
                      aria-label="메뉴 열기 버튼"
                    >
                      <BsList size="1.6em" />
                    </button>
                    <h1 className="logoName">wanted</h1>
                  </div>
                  <NavLg />
                </div>
                <div className="gnb-main lg-hidden">
                  <div className="main-logo ">
                    <button
                      className="gnb-icon-button"
                      type="button"
                      aria-label="메뉴 열기 버튼"
                    >
                      <BsList size="1.6em" />
                    </button>
                    <h1 className="logoName">wanted</h1>
                  </div>
                </div>
                <nav className="gnb-nav lg-hidden">
                  <GnbLeft />
                  <GnbRight />
                </nav>
              </div>
            </div>
          </div>
        </header>
      </IconContext.Provider>
    );
  }
}

export default Nav;
