export const userReducer = (state, action) => {
  switch (action.type) {
    case 'getUserInfo':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export const initState = {
  isLoaded: false,
  userInfo: {}
}
