import {COMPLETED, NOT_COMPLETED,ALL} from '../action/actionTypes';



export default  filters = (state='ALL', action) => {
    switch(action.type){
        case COMPLETED:
            return 'COMPLETED'
                
            
        case NOT_COMPLETED: 
            return 'NOT_COMPLETED'

        case ALL:
            return 'ALL'

        default: 
            return state;
    }

}