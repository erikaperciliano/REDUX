import UserActionTypes from '../user/action-types'

const initialState = {
  currentUser: null
}

const userReducer = (state = initialState, action) => {
  switch(action.type){
    case UserActionTypes.LOGOUT:
      return { ...state, currentUser: null }
    default:
      return state
  }
}


export default userReducer
