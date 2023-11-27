import './App.css';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Analytics from './pages/Analytics';
import Ecommerce from './pages/Ecommerce';
import Homepage from './pages/Homepage';



function App() {
  const hasSidebar = true;
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route
            exact
            path="/"
            element={<Homepage hasSidebar={hasSidebar} />}
          />
          <Route exact path="/analytics" element={<Analytics />} />
          <Route exact path="/E-Commerce" element={<Ecommerce />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
