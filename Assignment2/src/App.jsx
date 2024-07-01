import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DetailCountry from "./component/DetailCountry";
import Header from "./component/Header";
import HomePage from "./component/HomePage";

function App() {
  return (
    <div className="bg-neutral-50 h-full pb-10 dark:bg-very-dark">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:countryName" element={<DetailCountry />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
