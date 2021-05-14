import { connect } from 'react-redux';
import App from './App';
import { getBitcoinDataAction, getBinanceCoinDataAction, getEthereumDataAction, getTetherDataAction, getDogeCoinDataAction } from "../../data/actions/Api"

// const mapStateToProps = (state) => {
//     return {

//         }
//     }

const mapDispatchToProps = dispatch => {
    return {
        getBitcoinData: () => dispatch(getBitcoinDataAction()),
        getEthereumData: () => dispatch(getEthereumDataAction()),
        getDogeCoinData: () => dispatch(getDogeCoinDataAction()),
        getBinanceCoinData: () => dispatch(getBinanceCoinDataAction()),
        getTetherData: () => dispatch(getTetherDataAction()),
    };
};

export default connect(null, mapDispatchToProps)(App);