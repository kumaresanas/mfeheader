import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const App = () => (
  <div class="header">
  <h1>Header</h1>
  <p>My supercool header</p>
</div>

);
ReactDOM.render(<App />, document.getElementById("app"));
