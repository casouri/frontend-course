import { useDispatch, useSelector } from "react-redux";
import { resetError } from "../actions";

const ErrorDisplay = () => {
  const { error, message } = useSelector((state) => state.error);
  const dispatch = useDispatch();

  const onOk = (event) => {
    dispatch(resetError());
  };

  if (!error) {
    return null;
  } else {
    return (
      <div className="error-display">
        <p>{message}</p>
        <div><button onClick={onOk}>Ok</button></div>
      </div>
    );
  }
}

export default ErrorDisplay;
