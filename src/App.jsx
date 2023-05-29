import Layout from "./Component/Layout";
import Login from "./Component/Login";
import Signin from "./Component/Signin";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Component/Dashboard";
import MySavings from "./Component/MySavings";
import Explore from "./Component/Explore";
function App() {
  return (
    <div className="bg-black h-full">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="signin" element={<Signin />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="mysavings" element={<MySavings />} />
        <Route path="explore" element={<Explore/>}/>
      </Routes>
    </div>
  );
}

export default App;
