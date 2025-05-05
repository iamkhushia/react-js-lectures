const initalState = {
    count: 0
}
 
 
export const counterReducer = (state = initalState, action) =>{
    switch (action.type) {
        case "Increment":
            return {
                ...state,
                count: state.count + 1
            };
        case "Decrement":
            return {
                ...state,
                count: state.count - 1
            };
        case "Reset":
            return {
                ...state,
                count: 0
            };
            
        default:
            return state;
    }
}