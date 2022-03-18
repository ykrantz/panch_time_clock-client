import "./Outputs.css";

export default function Outputs({ resultsFromServer, messageFromServer }) {
  return (
    <div id="Outputs-div">
      <div id="Outputs-divMessage">
        <label className="Outputs-label">Message from server:</label>
        <p className="Outputs-message">{messageFromServer}</p>
      </div>
      <div id="Outputs-divShift">
        <label className="Outputs-label">results:</label>
        <ol id="ul_results">
          {resultsFromServer.map((result) => (
            <li key={result.enter}>
              <b>enter</b>: {result.enter} || <b>exit</b> : {result.exit}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
