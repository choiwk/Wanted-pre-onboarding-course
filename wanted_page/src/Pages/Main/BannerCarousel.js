import React from 'react';

class BannerCarousel extends React.Component {
  render() {
    const banner_list = [
      {
        banner_id: 1,
        src: 'https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg',
      },
      {
        banner_id: 2,
        src: 'https://static.wanted.co.kr/images/banners/1490/0b775035.jpg',
      },
      {
        banner_id: 3,
        src: 'https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg',
      },
      {
        banner_id: 4,
        src: 'https://static.wanted.co.kr/images/banners/1484/b2853456.jpg',
      },
      {
        banner_id: 5,
        src: 'https://static.wanted.co.kr/images/banners/1487/0d36f0b5.jpg',
      },
      {
        banner_id: 6,
        src: 'https://static.wanted.co.kr/images/banners/1486/fba2df30.jpg',
      },
    ];
    return (
      <>
        <div className="banner-carousel" role="region">
          <div className="banner-carousel-slider">
            <ol className="slider-list">
              {banner_list.map((el, index) => (
                <li className="slider-item" role="banner" key={index}>
                  <figure>
                    <img src={el.src} alt="" />
                    <figcaption className="visually-hidden">
                      원티드 광고 배너 {index}
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </>
    );
  }
}

export default BannerCarousel;
