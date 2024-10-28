import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Loading } from "./pages/loading";
import { Home } from "./pages/home";
import { Skills } from "./pages/skills";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/PortafolioJN" element={<Loading />} />
        <Route path="/home" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Router>
  );
}

export default App;
