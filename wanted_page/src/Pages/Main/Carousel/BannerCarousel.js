import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import CarouselBtn from './CarouselBtn';
import carouselData from '../../../data/carouselData';

function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const BANNER_TOTAL_NUM = carouselData.length;
  console.log(currentIndex);

  const handleSlide = (slideCounter) => {
    slideCounter < 0
      ? (slideCounter = BANNER_TOTAL_NUM - 1)
      : slideCounter > BANNER_TOTAL_NUM - 1
      ? (slideCounter = 0)
      : setCurrentIndex(0);

    setCurrentIndex(slideCounter);
  };

  const handleSwipe = (direction) => {
    console.log(`${100 / BANNER_TOTAL_NUM}`);
    console.log(`${0.5 + currentIndex}`);
    console.log(`${(-100 / BANNER_TOTAL_NUM) * (0.5 + currentIndex)}%`);
    handleSlide(currentIndex + direction);
  };

  return (
    <Slider>
      <SliderTrack
        style={{
          transform: `translateX(${
            (-100 / BANNER_TOTAL_NUM) * (0.5 + currentIndex)
          }%)`,
        }}
      >
        {carouselData.map((banner, index) => (
          <SliderItem key={index}>
            <img src={banner.image} alt={`광고 이미지 ${index}`} />
          </SliderItem>
        ))}
      </SliderTrack>
      <CarouselBtn handleSwipe={handleSwipe} />
    </Slider>
  );
}

const Slider = styled.div`
  margin-top: 20px;
`;

const SliderTrack = styled.ul`
  position: relative;
  display: flex;
  flex-direction: row;
  text-align: center;
  width: fit-content;
  left: 50%;
`;

const SliderItem = styled.li`
  list-style: none;
  border: 2px dotted hotpink;

  img {
    height: 183px;
    padding: 0 10px;
    object-fit: cover;
    cursor: pointer;
    @media screen and (min-width: 991px) {
      height: 300px;
    }
  }
  :hover {
    filter: brightness(50%);
  }
`;

export default BannerCarousel;
