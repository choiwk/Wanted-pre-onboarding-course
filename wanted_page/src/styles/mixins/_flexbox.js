import { css } from 'styled-components';

const flexMap = {
  start: 'flex-start',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
  stretch: 'stretch',
  center: 'center',
};

const flexBox = (js, ai) => css`
  display: flex;
  justify-content: ${flexMap[js] || js};
  align-items: ${flexMap[ai] || ai};
`;

const flex = {
  flexBox,
};

export default flex;
