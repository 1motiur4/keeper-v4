import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/landing"
          element={<Landing />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
