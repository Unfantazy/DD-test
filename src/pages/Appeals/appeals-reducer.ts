import {Dispatch} from 'redux'
import {appealPropsType} from "../../Components/Appeal/Appeal";
import {appealApi} from "../../api/appeal-api";

const initialState: Array<appealPropsType> = []

export const appealsReducer = (state = initialState, action: ActionsType): Array<appealPropsType> => {
    switch (action.type) {
        case 'GET-APPEALS':
            return action.appeals
        case 'DELETE-APPEAL':
            return state.filter(ap => ap.orderId !== action.orderId)
        case 'CREATE-APPEAL' :
            return [{...action.appeal}, ...state]

        default:
            return state
    }
}

// actions
export const setAppealsAC = (appeals: Array<appealPropsType>) => ({type: 'GET-APPEALS', appeals} as const)
export const deleteAppealAC = (orderId: number) => ({type: 'DELETE-APPEAL', orderId} as const)
export const createAppealAC = (appeal: appealPropsType) => ({type: 'CREATE-APPEAL', appeal} as const)

// thunks
export const getAppealsTC = () => {
    return (dispatch: ThunkDispatch) => {
        appealApi.getAppeals()
            .then((res) => {
                dispatch(setAppealsAC(res.data.orders))
            })
    }
}

export const deleteAppealTC = (orderId: number) => {
    return (dispatch: ThunkDispatch) => {
        appealApi.deleteAppeal(orderId)
            .then((res) => {
                dispatch(deleteAppealAC(orderId))
            })
    }
}

export const createAppealTC = (appeal:appealPropsType ) => {
    return (dispatch: ThunkDispatch) => {
        appealApi.createAppeal(appeal)
            .then((res) => {
                dispatch(createAppealAC(appeal))
            })
    }
}

// types
export type SetAppealsActionType = ReturnType<typeof setAppealsAC>;
export type DeleteAppealActionType = ReturnType<typeof deleteAppealAC>;
export type CreateAppealActionType = ReturnType<typeof createAppealAC>;

type ActionsType =
    | SetAppealsActionType
    | DeleteAppealActionType
    | CreateAppealActionType

type ThunkDispatch = Dispatch<ActionsType>
