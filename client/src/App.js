import './App.css';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Analytics from './pages/Analytics';
import Ecommerce from './pages/Ecommerce';



function App() {
  return(
    <>
    <Router>
    <Sidebar/>
    <Routes>
      <Route exact path='/analytics' element={<Analytics/>}/>
      <Route exact path='/E-Commerce' element={<Ecommerce/>}/>
    </Routes>

    </Router>
    </>
  )
}

export default App;
