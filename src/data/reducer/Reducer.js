
const getBitcoin = () => {}

const reducer = (state, action) => {
    switch (action.type) {
        case "GET_BITCOIN" : return getBitcoin(state, action);
        default : return state;
    }
}

export default reducer;