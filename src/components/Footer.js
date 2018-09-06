import React from 'react';
import styled from 'styled-components';
import { PRICE_LAMBO } from '../config';
import { convertTsToDate } from '../helpers';
import PropTypes from 'prop-types';

const Footer = ({ lastUpdate }) => (
  <FooterContainer>
    <Thanks>
      Thanks to{' '}
      <a
        href="http://cryptocompare.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        Cryptocompare
      </a>
      &nbsp; for the cryptocurrencies prices. Lamborghini price is referred to
      the Lamborghini Aventador base price(
      {PRICE_LAMBO}
      $) as reported on{' '}
      <a
        href="https://en.wikipedia.org/wiki/Lamborghini_Aventador"
        rel="noopener noreferrer"
        target="_blank"
      >
        Wikipedia
      </a>
    </Thanks>
    Prices updated at {convertTsToDate(lastUpdate)}
    <DownloadBash>
      Download the Bash version{' '}
      <a
        href="https://github.com/forgiangi/lamboconverter-bash"
        rel="noopener noreferrer"
        target="_blank"
      >
        here
      </a>
    </DownloadBash>
  </FooterContainer>
);

Footer.propTypes = {
  lastUpdate: PropTypes.number,
};

const DownloadBash = styled.div`
  margin-top: 10px;
`;
const Thanks = styled.p`
  font-size: 0.8rem;
  max-width: 780px;
  text-align: center;
`;
const FooterContainer = styled.footer`
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default Footer;
