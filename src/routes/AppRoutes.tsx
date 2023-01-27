import { Route, Routes } from "react-router-dom";
import Dashboard from "../scenes/dashboard";
import Sidebar from "../scenes/global/sidebar/Sidebar";

const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Sidebar />} /> */}
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;
