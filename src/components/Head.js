import { Helmet } from 'react-helmet';
import React from 'react';

const Head = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <html lang="en" />
    <title>LamboConverter</title>
    <meta
      name="description"
      content="Lamborghini to cryptocurrencies converter"
    />
    <meta name="keywords" content="lambo,lamborghini,cryptocurrency,bitcoin" />
    <meta property="og:url" content="https://lamboconverter.com/" />
    <meta property="og:site_name" content="LamboConverter" />
    <meta property="og:title" content="LamboConverter" />
    <meta
      property="og:description"
      content="Lamborghini to cryptocurrencies converter"
    />
    <meta property="og:type" content="website" />
    <meta
      property="og:image"
      content="https://lamboconverter.com/lamboconverter-logo.png"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:300,400"
      rel="stylesheet"
    />
  </Helmet>
);

export default Head;
