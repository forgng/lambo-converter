import React from 'react';
import styled from 'styled-components';
import Conversion from './Conversion';
import { ShareIcon } from './icons';
import { conversionRate } from '../helpers';

const openPopUp = (ticker, isSwapped) => {
  const url = 'https://lamboconverter.com';
  const text = `The official exchange rate for ${
    isSwapped ? ticker.symbol + '/LAMBO' : 'LAMBO/' + ticker.symbol
  } is ${conversionRate(isSwapped, ticker.price)} ${
    isSwapped ? 'LAMBO' : ticker.symbol
  } for 1 ${isSwapped ? ticker.symbol : 'LAMBO'} #${ticker.symbol} #LAMBO`;
  window.open(
    `http://twitter.com/share?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent(
      text,
      'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0'
    )}`
  );
};

const ConversionPanel = props => (
  <ConversionPanelWrapper>
    <Conversion {...props} />
    <IconsWrapper>
      <ShareIcon
        social="twitter"
        handleClick={() => openPopUp(props.ticker, props.isSwapped)}
      />
    </IconsWrapper>
  </ConversionPanelWrapper>
);

const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.3s linear;
  margin-top: -5px;
`;

const ConversionPanelWrapper = styled.div`
  margin: 0;
  padding: 20px;
  transition: all 300ms ease;
  display: inline-block;
  &:hover {
    ${IconsWrapper} {
      visibility: visible;
      opacity: 1;
    }
  }
  @media screen and (max-width: 600px) {
    margin: 15px 0;
    padding: 15px;
  }
  @media screen and (max-width: 450px) {
    margin: 10px 0;
    padding: 10px;
  }
`;

export default ConversionPanel;
