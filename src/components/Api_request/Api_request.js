import { useContext } from "react";
import handleClear from "../../contex/handleClear";
import "./Api_request.css";

export default function Api_request({ id, logo_name, func }) {
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
    >
      {logo_name}
    </button>
  );
}
