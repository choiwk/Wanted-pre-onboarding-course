import React from 'react';
import API from '../../config';
import DATA from '../../data/watnedBanner.json';
import BannerCarousel from './Carousel/BannerCarousel';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <main>
          <BannerCarousel />
        </main>
      </>
    );
  }
}

export default Main;
