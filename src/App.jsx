import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login"
import DashboardSa from "./components/DashboardSa";


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/dashboard/sa" element={<DashboardSa/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
