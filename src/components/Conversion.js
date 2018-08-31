import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { conversionRate } from '../helpers';

const Image = ({ symbol }) => (
  <Img
    src={`https://abitcompany-cdn.sirv.com/crypto_images/${symbol.toLowerCase()}.png`}
    height="90"
    alt={`${symbol.toLowerCase()}-logo`}
  />
);

Image.propTypes = {
  symbol: PropTypes.string,
};

const Img = styled.img`
  @media screen and (max-width: 600px) {
    height: 70px;
  }
  @media screen and (max-width: 450px) {
    height: 50px;
  }
  @media screen and (max-width: 350px) {
    height: 35px;
  }
`;
const LamboBlock = () => (
  <ConversionBlock>
    &nbsp;
    <Img
      src="https://abitcompany.sirv.com/lambo_converter/lambo.png"
      height="90"
      alt="lamborghini-logo"
    />
  </ConversionBlock>
);

const coinBlock = ticker => (
  <ConversionBlock>
    &nbsp;
    <Image symbol={ticker['symbol']} />
  </ConversionBlock>
);

const ConversionBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Conversion = ({ isSwapped, ticker }) => (
  <ConversionWrapper>
    {isSwapped ? coinBlock(ticker) : LamboBlock()}
    &nbsp;
    <span>=</span>
    &nbsp;
    <span>{conversionRate(isSwapped, ticker.price)}</span>
    &nbsp;
    {isSwapped ? LamboBlock() : coinBlock(ticker)}
  </ConversionWrapper>
);

Conversion.propTypes = {
  isSwapped: PropTypes.bool,
  ticker: PropTypes.object,
};

const ConversionWrapper = styled.div`
  font-size: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 600px) {
    font-size: 2.8rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 350px) {
    font-size: 1.5rem;
  }
`;

export default Conversion;
