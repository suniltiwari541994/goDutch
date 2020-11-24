import { UPDATE_MNO, UPDATE_OTHER_DETAIL } from './actionType'

export const addMobileNumber = (data) => {
    return {
        type: UPDATE_MNO,
        payload: data
    }
}

export const addOtherDetail = (data) => {
    return {
        type: UPDATE_OTHER_DETAIL,
        payload: data
    }
}