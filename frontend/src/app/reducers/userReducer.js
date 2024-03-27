export const GET_USERPROFILE = "GET_USERPROFILE"
export const EDIT_USERNAME = "EDIT_USERNAME"

const INITIAL_STATE = {
  status: 'VOID',
  userData: {}
};

export const userReducer = (state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case GET_USERPROFILE:
        return {
            ...state,
            status: 'SUCCEEDED',
            userData: action.payload
        }
    case EDIT_USERNAME: 
        return {
            ...state,
            status: "MODIFIED",
            userData: {
                ...state.userData,
                username: action.payload
            } 
        } 
    default:
        return state;    
  }
}