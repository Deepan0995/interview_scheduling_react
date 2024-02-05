import React from "react";
import { BrowserRouter } from "react-router-dom";

import Appbar from "./layout/Appbar";
function App() {
  return (
    <BrowserRouter>
      <Appbar />
    </BrowserRouter>
  );
}

export default App;
