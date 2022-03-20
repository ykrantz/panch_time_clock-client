import "./App.css";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import handleClear from "./contex/handleClear";
import {
  clac_total_hours_for_worker,
  get_shift_list_for_worker,
  report_enternce,
  report_exit,
  clearMessegeAndResults,
} from "./components/Main_punch_functions/Main_punch_functions";
import { useState } from "react";

function App() {
  const [resultsFromServer, setResultsFromServer] = useState([]);
  const [messageFromServer, setMessageFromServer] = useState("");

  const api_options_details = [
    {
      id: "report_enternce",
      logo_name: "enter",
      func: () => report_enternce(setMessageFromServer, setResultsFromServer),
      color: "aqua",
    },
    {
      id: "report_exit",
      logo_name: "exit",
      func: () => report_exit(setMessageFromServer, setResultsFromServer),
      color: "cornflowerblue",
    },
    {
      id: "clac_total_hours_for_worker",
      logo_name: "clac total hours for worker",
      func: () =>
        clac_total_hours_for_worker(setMessageFromServer, setResultsFromServer),
      color: "chartreuse",
    },
    {
      id: "get_shift_list_for_worker",
      logo_name: "get shift list for worker",
      func: () =>
        get_shift_list_for_worker(setMessageFromServer, setResultsFromServer),
      color: "darkgoldenrod",
    },
  ];

  return (
    <>
      <Header />
      <handleClear.Provider
        value={{
          setResultsFromServer: setResultsFromServer,
          setMessageFromServer: setMessageFromServer,
          clearMessegeAndResults: clearMessegeAndResults,
        }}
      >
        <Body
          api_options_details={api_options_details}
          resultsFromServer={resultsFromServer}
          messageFromServer={messageFromServer}
        />
      </handleClear.Provider>
    </>
  );
}

export default App;
