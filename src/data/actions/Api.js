// import axios from "../../axios"
// import { loadBitcoin, loadBinanceCoin, loadDogeCoin, loadEthereum, loadTether, loadBitcoinHealth } from "./State"

// export const getBitcoinDataAction = () => {
//     return (dispatch) => {
//         axios.get("query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=USD&apikey=FT8LTPYM6HXLP8GP")
//         .then(({ data }) => {
//             dispatch(loadBitcoin({data}))
//         })
//     }
// }

// export const getEthereumDataAction = () => {
//         return (dispatch) => {
//         axios.get("query?function=DIGITAL_CURRENCY_DAILY&symbol=ETH&market=USD&apikey=FT8LTPYM6HXLP8GP")
//         .then(({ data }) => {
//             dispatch(loadEthereum({data}))
//         })
//     }
// }


// export const getDogeCoinDataAction = () => {
//     return (dispatch) => {
//         axios.get("query?function=DIGITAL_CURRENCY_DAILY&symbol=DOGE&market=USD&apikey=FT8LTPYM6HXLP8GP")
//         .then(({ data }) => {
//             dispatch(loadDogeCoin({data}))
//         })
//     }
// }


// export const getBinanceCoinDataAction = () => {
//     return (dispatch) => {
//         axios.get("query?function=DIGITAL_CURRENCY_DAILY&symbol=BNB&market=USD&apikey=FT8LTPYM6HXLP8GP")
//         .then(({ data }) => {
//             dispatch(loadBinanceCoin({data}))
//         })
//     }
// }


// export const getTetherDataAction = () => {
//     return (dispatch) => {
//         axios.get("query?function=DIGITAL_CURRENCY_DAILY&symbol=USDT&market=USD&apikey=FT8LTPYM6HXLP8GP")
//         .then(({ data }) => {
//             dispatch(loadTether({data}))
//         })
//     }
// }

// export const getBitcoinHealthAction = () => {
//     return (dispatch) => {
//         axios.get("query?function=CRYPTO_RATING&symbol=BTC&apikey=FT8LTPYM6HXLP8GP")
//         .then(({ data }) => {
//             dispatch(loadBitcoinHealth({ data }))
//             console.log(data)
//         }) 
//     }
// }




