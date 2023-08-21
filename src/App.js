import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Report, ReportOne, ReportThree, ReportTwo } from "./pages/Report";
import Team from "./pages/Team";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/reports" element={<Report />} />
          <Route path="/reports/reports1" element={<ReportOne />} />
          <Route path="/reports/reports2" element={<ReportTwo />} />
          <Route path="/reports/reports3" element={<ReportThree />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
