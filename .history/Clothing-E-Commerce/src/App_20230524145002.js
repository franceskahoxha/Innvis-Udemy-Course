import Homepage from "./routes/Homepage/Homepage";
import { Routes, Route, Outlet } from "react-router-dom";
function App() {
  const Navigation = () => {
    return (
      <div>
        <div>I am a Navigation</div>
        <Outlet />
      </div>
    );
  };

  const Shop = () => {
    return (
      <div>
        <div>I am a shop</div>
        <Outlet />
      </div>
    );
  };
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Homepage />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
