import React from "react";
import ReactDOM from "react-dom";
import Calculator from "./components/Calculator/Calculator";

// ReactDOM.render(<Calculator />, document.getElementById('root'))

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
     <Calculator />
  </React.StrictMode>
);