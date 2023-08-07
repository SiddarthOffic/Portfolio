import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";

export default function ScreenRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
