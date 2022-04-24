const initState = {
  userDetail: null
};

const authReducer = (state = initState, action: {}) => {
  switch (action) {
    case "DUMMY":
      return {...state};
    default:
      return state;
  }
};

export default authReducer;