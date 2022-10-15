import { useDispatch, useSelector } from "react-redux";
import { INCREMENT, DECREMENT } from "../actions/types";

const Counter = () => {
  const { value } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(value);
  const handleIncrement = () => {
    dispatch({ type: INCREMENT });
  };

  const handleDecrement = () => {
    dispatch({ type: DECREMENT });
  };

  return (
    <div>
      <h1>{value}</h1>
      <button
        onClick={handleIncrement}
        style={{ marginRight: "10px", cursor: "pointer" }}
      >
        Increment
      </button>
      <button onClick={handleDecrement} style={{ cursor: "pointer" }}>
        Derement
      </button>
    </div>
  );
};

export default Counter;
