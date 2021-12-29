const defaultState = {
    cash: 5
}

export const nextReducer = (state  = defaultState, action) => {
    switch (action.type) {
        case "increment":
            return {...state, cash: 10}
            
            
    
        default:
            return state
    }
}