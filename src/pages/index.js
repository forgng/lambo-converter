import React from 'react';
import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import { Spring, Transition, animated } from 'react-spring';
import { TimingAnimation, Easing } from 'react-spring/dist/addons';
import {
  Head,
  ConversionPanel,
  Footer,
  SwapButton,
  Search,
} from '../components';
import { symbols } from '../config';

const theme = {
  mainColor: '#05c3b6',
  baseTextColor: '#161338',
};

class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lastTickers: null,
      isLoading: true,
      isSwapped: false,
      searchString: '',
      items: ['item1', 'item2', 'item3'],
    };
  }
  swap = () => this.setState({ isSwapped: !this.state.isSwapped });

  async componentDidMount() {
    const ts = Date.now();
    const oldTickers = JSON.parse(window.localStorage.getItem('lastTickers'));
    let differentCoins = false;
    if (oldTickers) {
      const coinsStored = oldTickers.tickers
        .map(coin => coin['symbol'])
        .sort()
        .toString();
      const symbolsConfig = symbols
        .map(el => el)
        .sort()
        .toString();
      if (coinsStored !== symbolsConfig) {
        differentCoins = true;
      }
    }
    if (
      !oldTickers ||
      ts - oldTickers.timestamp > 60 * 60 * 1000 ||
      differentCoins
    ) {
      const response = await fetch(
        `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${symbols.join()}&tsyms=USD`
      );
      const data = await response.json();
      const newPrices = {
        tickers: Object.entries(data).map(el => ({
          symbol: el[0],
          price: el[1]['USD'],
        })),
        timestamp: ts,
      };
      window.localStorage.setItem('lastTickers', JSON.stringify(newPrices));
      this.setState({ lastTickers: newPrices });
    } else {
      this.setState({ lastTickers: oldTickers });
    }
    this.setState({ isLoading: false });
  }
  render() {
    return (
      <>
        <Head />
        <ThemeProvider theme={theme}>
          <>
            <Main>
              <PageContainer>
                <MainTitle>LamboConverter</MainTitle>
                <SubTitle>Convert your favorite cryptos in lambos</SubTitle>
                <Search
                  searchString={this.state.searchString}
                  handleChangeSearch={newString =>
                    this.setState({ searchString: newString })
                  }
                />
                <SwapButtonContainer>
                  <Spring
                    impl={TimingAnimation}
                    config={{ duration: 100, easing: Easing.linear }}
                    to={{
                      rotation: !this.state.isSwapped ? '0deg' : '180deg',
                    }}
                    swap={this.swap}
                    children={SwapButton}
                  />
                </SwapButtonContainer>
                {!this.state.isLoading ? (
                  <Ul>
                    <Transition
                      native
                      keys={this.state.lastTickers.tickers
                        .filter(ticker =>
                          ticker.symbol
                            .toUpperCase()
                            .includes(this.state.searchString.toUpperCase())
                        )
                        .map(ticker => ticker.symbol)}
                      from={{ opacity: 0, height: 0 }}
                      enter={{ opacity: 1, height: 'auto' }}
                      leave={{ opacity: 0, height: 0 }}
                    >
                      {this.state.lastTickers.tickers
                        .filter(ticker =>
                          ticker.symbol
                            .toUpperCase()
                            .includes(this.state.searchString.toUpperCase())
                        )
                        .map(ticker => styles => (
                          <animated.li style={{ ...styles }}>
                            <ConversionPanel
                              ticker={ticker}
                              key={ticker.symbol}
                              isSwapped={this.state.isSwapped}
                            />
                          </animated.li>
                        ))}
                    </Transition>
                  </Ul>
                ) : null}
              </PageContainer>
            </Main>
            <Footer />
          </>
        </ThemeProvider>
      </>
    );
  }
}
injectGlobal`
  *,
  *:after,
  *:before {
      box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    font-weight: 400;
    letter-spacing: 1px;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  a {
    text-decoration: none;
    color: ${theme.baseTextColor};
    transition: color 0.3s;
    border-bottom: 1px solid ${theme.baseTextColor};
    &:hover {
        transition: color 0.3s;
        color: ${theme.mainColor};
        cursor: pointer;
        border-bottom: 1px solid ${theme.mainColor};
    }
  }
`;

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  position: relative;
  padding: 0;
`;
const SwapButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Main = styled.main`
  min-height: 100vh;
`;

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 20px;
  max-width: 780px;
  margin: auto;
`;
const MainTitle = styled.h1`
  font-size: 4rem;
  text-align: center;
  font-weight: 300;
  margin-bottom: 0;
  @media screen and (max-width: 600px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 350px) {
    font-size: 1.8rem;
  }
`;

const SubTitle = styled.h2`
  font-size: 1.7rem;
  text-align: center;
  font-weight: 300;
  margin-top: 0;
  @media screen and (max-width: 600px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 350px) {
    font-size: 1rem;
  }
`;

export default HomePage;
