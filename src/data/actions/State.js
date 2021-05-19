export const loadBitcoin = (data) => {
    return {
        type: "LOAD_BITCOIN",
        payload: data
    }
}

export const loadBinanceCoin = (data) => {
    return {
        type: "LOAD_BINANCE",
        payload: data
    }
}

export const loadEthereum = (data) => {
    return {
        type: "LOAD_ETHEREUM",
        payload: data
    }
}

export const loadTether = (data) => {
    return {
        type: "LOAD_TETHER",
        payload: data
    }
}

export const loadDogeCoin = (data) => {
    return {
        type: "LOAD_DOGECOIN",
        payload: data
    }
}

export const loadBitcoinHealth = data => {
    return {
        type: "LOAD_BITCOIN_HEALTH",
        payload: data
    }
}

export const loadEthereumHealth = data => {
    return {
        type: "LOAD_ETHEREUM_HEALTH",
        payload: data
    }
}

export const loadBinanceCoinHealth = data => {
    return {
        type: "LOAD_BINANCECOIN_HEALTH",
        payload: data
    }
}


