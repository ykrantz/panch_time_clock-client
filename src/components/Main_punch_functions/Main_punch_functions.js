// import React from "react";
// import ReactDOM from "react-dom";
import BASE_URL from "../../general/generalVars";

// ***********
// requeste to server:
// ***********
export async function report_enternce(
  setMessageFromServer,
  setResultsFromServer
) {
  const id = get_id_from_input(setMessageFromServer, setResultsFromServer);
  if (id) {
    const time = new Date().getTime();
    const res = await fetch(`${BASE_URL}/panchtime/${id}/enter/${time}`);
    const data = await res.text();

    const data_parse = JSON.parse(data);

    setMessageFromServer(data_parse);
  }
}

export async function report_exit(setMessageFromServer, setResultsFromServer) {
  const id = get_id_from_input(setMessageFromServer, setResultsFromServer);
  if (id) {
    const time = new Date().getTime();
    const res = await fetch(`${BASE_URL}/panchtime/${id}/exit/${time}`);
    const data = await res.text();
    const data_parse = JSON.parse(data);
    setMessageFromServer(data_parse);
  }
}

export async function clac_total_hours_for_worker(
  setMessageFromServer,
  setResultsFromServer
) {
  const id = get_id_from_input(setMessageFromServer, setResultsFromServer);
  if (id) {
    const res = await fetch(`${BASE_URL}/calctotalhourshifts/${id}`);
    const data = await res.text();
    const data_parse = JSON.parse(data);
    setMessageFromServer(data_parse);
  }
}
export async function get_shift_list_for_worker(
  setMessageFromServer,
  setResultsFromServer
) {
  const id = get_id_from_input(setMessageFromServer, setResultsFromServer);
  if (id) {
    const res = await fetch(`${BASE_URL}/wholehourshifts/${id}`);
    const data = await res.text();
    const data_parse = JSON.parse(data);

    if (typeof data_parse == "object") {
      setResultsFromServer(data_parse);

      setMessageFromServer("Your shifts:");
    } else {
      setMessageFromServer(data_parse);
      setResultsFromServer([]);
    }
  }
}

// ***********
// side function:
// ***********
export function get_id_from_input(setMessageFromServer, setResultsFromServer) {
  const id = document.getElementById("input_id").value;
  if (id) {
    return id;
  } else {
    console.log("No id");
    setMessageFromServer("no id was picken");
    setResultsFromServer([]);
  }
}

// export function reset_id_in_input() {
//   document.getElementById("input_id").value = "";
// }

export function clearMessegeAndResults(
  setMessageFromServer,
  setResultsFromServer
) {
  setMessageFromServer("waiting for result from server");
  setResultsFromServer([]);
}
