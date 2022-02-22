import { memo } from 'react';
import styled from 'styled-components/macro';
import { IconContext } from 'react-icons';
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';

const CarouselBtn = ({ handleSwipe }) => {
  return (
    <IconContext.Provider value={{ size: '16px' }}>
      <SlidePrevBtn direction="prev" onClick={() => handleSwipe(-1)}>
        <MdOutlineArrowBackIos style={{ paddingTop: '2px' }} />
      </SlidePrevBtn>
      <SlideNextBtn direction="next" onClick={() => handleSwipe(1)}>
        <MdOutlineArrowForwardIos style={{ paddingTop: '2px' }} />
      </SlideNextBtn>
    </IconContext.Provider>
  );
};

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
