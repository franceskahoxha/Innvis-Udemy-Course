import Homepage from "./routes/Homepage/Homepage";
import { Routes, Route, Outlet } from "react-router-dom";
function App() {
  const navigation = () => {
    return (
      <div>
        <div>I am a Navigation</div>
        <Outlet />
      </div>
    );
  };
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}

export default App;
