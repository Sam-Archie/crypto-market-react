# Crypto Market Tracker

This app displays some easy to digest data on the following cryptocurrencies: Bitcoin, Ethereum, Binance-Coin, Dogecoin & Tether. 

The data is sourced from the Alpha-Vantage free API (which is limited to the number of calls it can make) and then it is presented in easily digested, visually pleasing graphs to show the price data from the last 7, 30 and 90 days.

## How to run it locally

To run the project locally the following commands need to be executed:

### git clone git@github.com:Sam-Archie/crypto-market-react.git {directory-name} 
This will clone the project into the specified directory

### NPM install
This installs the packages required to make the app run

### NPM start
Boots the site in the local environment.

## About the build

The app is built using react and styled using a combination of React Bootstrap components, chartJS and some custom SCSS. The API data is drawn down from a free resource at Alpha-Vantage which provides all the market data that the app renders.

## Improvements list

1. Error Handling - currently the app does handle errors from the API return but they could be improved to create a sleeker user experience
2. Scaling the app - due to the limitation of the free API the number of currencies is limited to 5, in an ideal world the app would allow the user to determine which data to fetch.



