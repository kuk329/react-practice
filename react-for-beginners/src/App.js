import styles from "./App.module.css";
import { useEffect, useState } from "react";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { element } from "prop-types";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie" element={<Detail />} />

        <Route path="/" element={<Home />} />
      </Switch>
    </Router>
  );
}
export default App;
