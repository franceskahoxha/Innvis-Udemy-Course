import Homepage from "./routes/Homepage/Homepage";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" Component={Homepage} />
    </Routes>
  );
}

export default App;
