import axios from "../../axios"
import { loadBitcoin } from "./State"

export const getBitcoinDataAction = () => {
    return (dispatch) => {
        axios.get("query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=USD&apikey=FT8LTPYM6HXLP8GP")
        .then(({ data }) => {
            dispatch(loadBitcoin({data}))
        })
    }
}