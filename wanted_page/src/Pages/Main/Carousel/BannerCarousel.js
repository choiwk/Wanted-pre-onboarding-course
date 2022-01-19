import React, { useRef } from 'react';
import styled from 'styled-components';
import CarouselBtn from './CarouselBtn';

const BannerCarousel = () => {
  const banner_list = [
    {
      banner_id: 1,
      image: 'https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg',
    },
    {
      banner_id: 2,
      image: 'https://static.wanted.co.kr/images/banners/1490/0b775035.jpg',
    },
    {
      banner_id: 3,
      image: 'https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg',
    },
    {
      banner_id: 4,
      image: 'https://static.wanted.co.kr/images/banners/1484/b2853456.jpg',
    },
    {
      banner_id: 5,
      image: 'https://static.wanted.co.kr/images/banners/1487/0d36f0b5.jpg',
    },
    {
      banner_id: 6,
      image: 'https://static.wanted.co.kr/images/banners/1486/fba2df30.jpg',
    },
  ];

  const BANNER_TOTAL_NUM = banner_list.length;
  const slideRef = useRef(null);

  return (
    <>
      <SliderSection>
        <SliderContainer>
          <div className="container">
            <div className="row">
              <div
                className="col-sm-4"
                style={{ display: 'flex' }}
                ref={slideRef}
              >
                {banner_list.map((banner, index) => (
                  <SliderItem key={index}>
                    <img src={banner.image} alt={`광고 이미지 ${index}`} />
                  </SliderItem>
                ))}
              </div>
            </div>
          </div>
        </SliderContainer>
        <CarouselBtn
          className={'lg-only'}
          bannerTotalNum={BANNER_TOTAL_NUM}
          slideRef={slideRef}
        />
      </SliderSection>
    </>
  );
};

const SliderSection = styled.div`
  width: 100%;
`;

const SliderContainer = styled.ul`
  ${({ theme }) => theme.flexBox('between')};
  overflow: hidden;
`;

const SliderItem = styled.li`
  position: relative;
  img {
    height: 183px;
    padding: 20px 10px 0;
    object-fit: cover;
    @media screen and (min-width: 991px) {
      padding: 25px 12px 0;
      height: 300px;
    }
  }
`;

export default BannerCarousel;
