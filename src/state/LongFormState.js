import { actionType } from "./actionType";

export const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  education: "",
  feedback: "",
  gender: "",
  quantity: 0,
  term: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionType.INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    case actionType.TOGGLE:
      return {
        ...state,
        term: !state.term,
      };

    case actionType.INC:
      return {
        ...state,
        quantity: state.quantity + 1,
      };

    case actionType.DEC:
      return {
        ...state,
        quantity: state.quantity - 1,
      };

    default:
      return state;
  }
};
