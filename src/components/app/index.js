import { connect } from 'react-redux';
import App from './App';
import { /*getBitcoinDataAction, getBinanceCoinDataAction, getEthereumDataAction, getTetherDataAction, getDogeCoinDataAction, getBinanceCoinHealthAction , getDogeCoinHealthAction, getTetherHealthAction, getEthereumHealthAction,*/ getBitcoinHealthAction } from "../../data/actions/Api"

// const mapStateToProps = (state) => {
//     return {

//         }
//     }

const mapDispatchToProps = dispatch => {
    return {
        // getBitcoinData: () => dispatch(getBitcoinDataAction()),
        // getEthereumData: () => dispatch(getEthereumDataAction()),
        // getDogeCoinData: () => dispatch(getDogeCoinDataAction()),
        // getBinanceCoinData: () => dispatch(getBinanceCoinDataAction()),
        // getTetherData: () => dispatch(getTetherDataAction()),
        getBitcoinHealth: () => dispatch(getBitcoinHealthAction()),
        // getEthereumHealth: () => dispatch(getEthereumHealthAction()),
        // getTetherHealth: () => dispatch(getTetherHealthAction()),
        // getDogeCoinHealth: () => dispatch(getDogeCoinHealthAction()),
        // getBinanceCoinHealth: () => dispatch(getBinanceCoinHealthAction())
    };
};

export default connect(null, mapDispatchToProps)(App);