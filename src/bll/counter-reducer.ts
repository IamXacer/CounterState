import {Dispatch} from "redux";


const initialState = {
    value: 0
}

type InitialStateType = typeof initialState
export const counterReducer = (state:InitialStateType=initialState, action:IncValueActionType ):InitialStateType => {
switch (action.type) {
    case 'INC-VALUE':
        return {
            ...state,value: state.value +1
        }
    default: return state
}
}

export const insCounterValueAC = () => ({type:'INC-VALUE'} as const)
export type IncValueActionType = ReturnType<typeof insCounterValueAC>

export const incValueTC = (value:number)=> (dispatch:Dispatch)=>{
    localStorage.setItem('counterValue',JSON.stringify(value))
}