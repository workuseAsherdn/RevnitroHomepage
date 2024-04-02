import "./App.css";
import "./HomepageCSS.css";
import "./FormPageCSS.css";
import "./TeamPageCSS.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Team from "./Components/Team";
import Footer from "./Components/Footer";
import Header from "./Components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
