import { Route, Routes } from "react-router-dom";
import { Dashboard, Team } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/team" element={<Team />} />
    </Routes>
  );
};

export default AppRoutes;
