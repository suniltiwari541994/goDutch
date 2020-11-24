import { UPDATE_MNO, UPDATE_OTHER_DETAIL } from '../action/actionType'

initialState = {
    mobileNo: "",
    profession: "",
    professionIndex: 0,
    name: "",
    upiid: ""
}


export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_MNO:
            return {
                ...state,
                mobileNo: action.payload
            }
            break;
        case UPDATE_OTHER_DETAIL:
            return {
                ...state,
                profession: action.payload.profession,
                name: action.payload.name,
                upiid: action.payload.upiid,
                professionIndex:action.payload.professionIndex,
            }
            break;
        default:
            return state
            break;
    }
    return state
}