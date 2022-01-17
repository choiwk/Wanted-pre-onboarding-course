import React from 'react';
import API from '../../config';
import DATA from '../../data/watnedBanner.json';
import BannerCarousel from './BannerCarousel';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <main>
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <BannerCarousel />
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Main;
