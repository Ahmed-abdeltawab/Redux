import { INCREMENT, DECREMENT } from "../actions/types";

const CounterReducer = (state = { value: 0 }, action) => {
  console.log(action);
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
};

export default CounterReducer;
