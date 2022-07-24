export const ACTION_TYPES = {
  SET_USER: "SET_USER",
};

export const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  age: "",
  experience: "",
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_USER:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
