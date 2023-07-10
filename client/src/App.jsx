import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import screens
import { DramaList } from "./screens/DramaList";
import { AddDramas } from "./screens/AddDramas";
import { EditDramas } from "./screens/EditDramas";
import { LandingPage } from "./screens/LandingPage";
import { FindDramas } from "./screens/FindDramas";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/drama" element={<DramaList />} />
        <Route exact path="/add" element={<AddDramas />} />
        <Route exact path="/edit" element={<EditDramas />} />
        <Route exact path='/find' element={<FindDramas />} />
      </Routes>
    </Router>
  );
}

export default App;
