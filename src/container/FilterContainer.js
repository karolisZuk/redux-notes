import {connect} from 'react-redux';
import {filterCompleted,filterNotCompleted,filterAll} from '../action';
import BottomBar from '../component/BottomBar';


const mapDispatchToProps = dispatch => ({
    filterCompleted: () => dispatch(filterCompleted()),
    filterNotCompleted: () => dispatch(filterNotCompleted()),
    filterAll: () => dispatch(filterAll())
})




export default connect(mapDispatchToProps)(BottomBar);