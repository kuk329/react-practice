import { useEffect, useState } from "react";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { element } from "prop-types";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />

        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default App;
