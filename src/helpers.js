import { PRICE_LAMBO } from './config';

const roundTo = (n, digits) => {
  if (digits === undefined) {
    digits = 0;
  }

  const multiplicator = Math.pow(10, digits);
  n = parseFloat((n * multiplicator).toFixed(11));
  const test = Math.round(n) / multiplicator;
  return +test.toFixed(digits);
};

const decimals = num => {
  switch (true) {
    case num < 0.0001:
      return 6;
    case num < 0.01:
      return 5;
    case num < 1:
      return 3;
    case num < 10:
      return 2;
    case num < 1000:
      return 1;
    case num < 10000:
      return 0;
    default:
      return 0;
  }
};

const conversionRate = (isSwapped, priceCoin) => {
  return isSwapped
    ? roundTo(priceCoin / PRICE_LAMBO, decimals(priceCoin / PRICE_LAMBO))
    : roundTo(PRICE_LAMBO / priceCoin, decimals(PRICE_LAMBO / priceCoin));
};

export { roundTo, decimals, conversionRate };
