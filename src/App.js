import "./App.css";
import Header from "./Header";
import Home from "./Home";
import CountryDetails from "./CountryDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <div className="forCountries">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/country/:cca3" element={<CountryDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
