
const loadBitcoin = (state, action) => ({...state, bitcoin: action.payload.data})
const loadEthereum = (state, action) => ({...state, ethereum: action.payload.data})
const loadBinance = (state, action) => ({...state, binanceCoin: action.payload.data})
const loadTether = (state, action) => ({...state, tether: action.payload.data})
const loadDogeCoin = (state, action) => ({...state, dogeCoin: action.payload.data})
const loadBitcoinHealth = (state, action) => ({...state, bitcoinHealth: action.payload.data})


const reducer = (state, action) => {
    switch (action.type) {
        case "LOAD_BITCOIN" : return loadBitcoin(state, action);
        case "LOAD_BINANCE" : return loadBinance(state, action);
        case "LOAD_ETHEREUM" : return loadEthereum(state, action);
        case "LOAD_TETHER" : return loadTether(state, action);
        case "LOAD_DOGECOIN" : return loadDogeCoin(state, action);
        case "LOAD_BITCOIN_HEALTH" : return loadBitcoinHealth(state, action);
        default : return state;
    }
}

export default reducer;