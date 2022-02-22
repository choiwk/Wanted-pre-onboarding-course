import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import CarouselBtn from './CarouselBtn';
import carouselData from '../../../data/carouselData';

function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const BANNER_TOTAL_NUM = carouselData.length;

  const useInterval = (callback, delay) => {
    const saveCallback = useRef();

    useEffect(() => {
      saveCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        saveCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };

  useInterval(() => {
    handleSlide(currentIndex + 1);
  }, 2000);

  const handleSlide = (slideCounter) => {
    slideCounter < 0
      ? (slideCounter = BANNER_TOTAL_NUM - 1)
      : slideCounter > BANNER_TOTAL_NUM - 1
      ? (slideCounter = 0)
      : setCurrentIndex(0);

    setCurrentIndex(slideCounter);
  };

  const handleSwipe = (direction) => {
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
  transition: all 500ms ease-in-out;
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
