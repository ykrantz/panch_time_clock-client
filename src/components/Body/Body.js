import { useState } from "react";
import Api_options from "../Api_options/Api_options";
import Inputs from "../Inputs/Inputs";
import Outputs from "../Outputs/Outputs";
import "./Body.css";

export default function Body({
  api_options_details,

  resultsFromServer,
  messageFromServer,
}) {
  return (
    <div className="Body-div_body">
      <h2>Please choose an action:</h2>
      <div id="Body-inputts-api">
        <Api_options api_options_details={api_options_details} />
        <Inputs />
      </div>
      <Outputs
        resultsFromServer={resultsFromServer}
        messageFromServer={messageFromServer}
      />
    </div>
  );
}
