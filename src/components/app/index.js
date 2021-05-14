import { connect } from 'react-redux';
import App from './App';
import { getBitcoinDataAction } from "../../data/actions/Api"

// const mapStateToProps = (state) => {
//     return {

//         }
//     }

const mapDispatchToProps = dispatch => {
    return {
        getBitcoinData: () => dispatch(getBitcoinDataAction())
    };
};

export default connect(null, mapDispatchToProps)(App);