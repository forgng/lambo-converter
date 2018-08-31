import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ExchangeButton = ({ swap, rotation }) => (
  <ExchangeBtn onClick={swap}>
    <svg
      aria-hidden="true"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      style={{ transform: `rotate(${rotation})` }}
    >
      <path d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z" />
    </svg>
  </ExchangeBtn>
);

ExchangeButton.propTypes = {
  swap: PropTypes.func,
  rotation: PropTypes.number,
};
const ExchangeBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid transparent;
  background-color: #05c3b6;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  svg {
    fill: #fff;
    width: 100%;
    transition: all 0.3s;
  }
  &:hover {
    transition: all 0.3s;
    cursor: pointer;
    border: 1px solid #05c3b6;
    background-color: #fff;
    svg {
      transition: all 0.3s;
      fill: #05c3b6;
    }
  }
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 450px) {
    height: 40px;
    width: 40px;
  }
`;

export default ExchangeButton;
