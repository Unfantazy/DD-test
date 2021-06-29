import {Dispatch} from 'redux'
import {appealPropsType} from "../../Components/Appeal/Appeal";
import {appealApi} from "../../api/appeal-api";

const initialState: Array<appealPropsType> = []

export const appealsReducer = (state: Array<appealPropsType> = initialState, action: ActionsType) : Array<appealPropsType> => {
    switch (action.type) {
        case 'GET-APPEALS':
            return action.appeals.map(a => ({ ...a}))
        default:
            return state
    }
}

// actions
export const setAppealsAC = (appeals: Array<appealPropsType>) => ({type: 'GET-APPEALS', appeals} as const)

// thunks
export const getAppealsTC = () => {
    return (dispatch: ThunkDispatch) => {
        appealApi.getAppeals()
            .then((res) => {
                dispatch(setAppealsAC(res.data))
            })
    }
}

// types
export type SetAppealsActionType = ReturnType<typeof setAppealsAC>;

type ActionsType =
    | SetAppealsActionType

type ThunkDispatch = Dispatch<ActionsType>