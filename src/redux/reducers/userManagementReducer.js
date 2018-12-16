const initialState = {
    userList: null
};

const userManagementReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'ADD_USER_LIST':
          return Object.assign({}, state, { userList: action.users });
      default:
      return state
  }
};

export default userManagementReducer;

