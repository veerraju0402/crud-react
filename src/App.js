import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/navbar';
import Home from './pages/Home';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Home /> */}
      
       <Router>
        <Navbar />
          <Routes>
        <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
           <Route exact path="/edituser/:myEmpId" element={<EditUser />} />
          <Route exact path="/viewuser/:myEmpId" element={<ViewUser />} /> 
          <Route exact path="/login/:name" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
