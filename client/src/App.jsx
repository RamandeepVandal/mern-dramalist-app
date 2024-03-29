import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import screens
import { DramaList } from "./screens/DramaList";
import { LandingPage } from "./screens/LandingPage";
import { FindDramas } from "./screens/FindDramas";
import { SearchDramas } from "./screens/SearchDramas";
import { LoginPage } from "./screens/LoginPage";
import { DramaDetails } from "./screens/DramaDetails";
import { UserDramas } from "./screens/UserDramas";
import { RegisterPage } from "./screens/RegisterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/drama" element={<DramaList />} />
        <Route exact path="/find" element={<FindDramas />} />
        <Route exact path="/search" element={<SearchDramas />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/details" element={<DramaDetails />} />
        <Route exact path='/userdrama' element={<UserDramas />} />
      </Routes>
    </Router>
  );
}

export default App;
