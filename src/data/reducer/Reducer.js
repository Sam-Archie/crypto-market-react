
const loadBitcoin = (state, action) => ({...state, bitcoin: action.payload.data})

const reducer = (state, action) => {
    switch (action.type) {
        case "LOAD_BITCOIN" : return loadBitcoin(state, action);
        default : return state;
    }
}

export default reducer;