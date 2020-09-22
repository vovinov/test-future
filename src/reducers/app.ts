import {RowType} from '../types';


let initialState = {
    data: [] as Array<RowType>

}

const appReducer = (state = initialState, action: any): any => {
    switch (action.type) {
        default:
            return state;
    }
}

export default appReducer;

