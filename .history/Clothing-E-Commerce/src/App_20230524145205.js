import Homepage from "./routes/Homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation/Navigation";
function App() {
  const Shop = () => {
    return (
      <div>
        <div>I am a shop</div>
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
