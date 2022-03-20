import { useContext } from "react";
import handleClear from "../../contex/handleClear";
import "./Api_request.css";

export default function Api_request({ id, logo_name, func, color }) {
  const { setMessageFromServer } = useContext(handleClear);

  const { setResultsFromServer } = useContext(handleClear);

  const { clearMessegeAndResults } = useContext(handleClear);

  return (
    <button
      id={id}
      onClick={() => {
        clearMessegeAndResults(setMessageFromServer, setResultsFromServer);
        func();
      }}
      className="Api_request-button"
      style={{ backgroundColor: color }}
    >
      {logo_name}
    </button>
  );
}
