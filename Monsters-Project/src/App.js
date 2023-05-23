import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Monster from "./components/Monster";
import Promises from "./components/Promises";
import CallBackFunctions from "./components/CallBackFunctions";
import AsyncAwait from "./components/AsyncAwait";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AsyncAwait />} />
      </Routes>
    </Router>
  );
}

export default App;
