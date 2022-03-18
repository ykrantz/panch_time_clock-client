import Api_request from "../Api_request/Api_request";
import "./Api_options.css";

export default function Api_options({
  api_options_details,
  // setResultsFromServer,
  // setMessageFromServer,
}) {
  const api_options_list = api_options_details.map((api_detail) => {
    return (
      <Api_request
        key={api_detail.id}
        id={api_detail.id}
        logo_name={api_detail.logo_name}
        func={api_detail.func}
      />
    );
  });
  return (
    <div>
      {/* // <select id="Api_options-select" size={api_options_details.length}> */}
      {api_options_list}
      {/* // </select> */}
    </div>
  );
}
