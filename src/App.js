import React from "react";
import Name from "./Name";
import Wishe from "./Wishe";
import { Route, HashRouter as Routers, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <div style={{ height: window.innerHeight * 0.85 }}>
        <Routers>
          <Routes>
            <Route path="/" element={<Name />} />
            <Route path="/Wishe" element={<Wishe />} />
          </Routes>
        </Routers>
      </div>

    </div>
  );
}

export default App;
