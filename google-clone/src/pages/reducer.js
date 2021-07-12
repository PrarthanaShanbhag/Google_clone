export const initialState = {
    term: null
    //initialstate refers to initial state of input text
};

export const actionType = {
    SET_SEARCH_TERM: 'SET_SEARCH_TERM'
    //action type refers to current action performed on datalayer
};

const reducer = (state, action) => {
    
    switch (action.type) {
    
        case actionType.SET_SEARCH_TERM: return {
                                            ...state,//spreading operator
                                            term:action.term
                                          };
        default  : return state;                                          
    }

};

export default reducer;