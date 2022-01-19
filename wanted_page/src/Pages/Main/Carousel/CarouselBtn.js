import { useState, useEffect, memo } from 'react';
import styled from 'styled-components/macro';
import { IconContext } from 'react-icons';
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';

const CarouselBtn = ({ bannerTotalNum, slideRef }) => {
  const [bannerSlide, setBannerSlide] = useState(2);

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${bannerSlide}00%)`;
  }, [slideRef, bannerSlide]);

  useEffect(() => {
    setTimeout(() => {
      setBannerSlide((next) => {
        if (next < bannerTotalNum - 1) {
          return next + 1;
        } else return 0;
      });
    }, 2000);
  });

  const prevBtnFunc = () => {
    setBannerSlide(bannerSlide === 0 ? bannerTotalNum - 1 : bannerSlide - 1);
  };

  const nextBtnFunc = () => {
    setBannerSlide(bannerSlide === bannerTotalNum - 1 ? 0 : bannerSlide + 1);
  };
  return (
    <IconContext.Provider value={{ size: '16px' }}>
      <SlidePrevBtn onClick={prevBtnFunc}>
        <MdOutlineArrowBackIos style={{ paddingTop: '2px' }} />
      </SlidePrevBtn>
      <SlideNextBtn onClick={nextBtnFunc}>
        <MdOutlineArrowForwardIos style={{ paddingTop: '2px' }} />
      </SlideNextBtn>
    </IconContext.Provider>
  );
};

// const ButtonGroup = styled.div`
//   border: 1px solid red;
//   position: relative;
//   ${({ theme }) => theme.flexBox('between')};
// `;

const SlidePrevBtn = styled.button.attrs({
  type: 'button',
  alt: '광고 이전 버튼',
})`
  @media screen and (max-width: 991px) {
    opacity: 0;
    cursor: default;
  }
  position: absolute;
  ${({ theme }) => theme.flexBox('center')};
  text-align: center;
  display: inline;
  width: 30px;
  height: 60px;
  left: 18%;
  top: 17%;
  border-radius: 15px;
  background-color: #fff;
  opacity: 0.5;
  z-index: 1;
  cursor: pointer;
`;

const SlideNextBtn = styled(SlidePrevBtn).attrs({
  type: 'button',
  alt: '광고 다음 버튼',
})`
  left: 83%;
`;
export default memo(CarouselBtn);
