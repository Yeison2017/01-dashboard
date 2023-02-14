import { Route, Routes } from "react-router-dom";
import { Contacts, Dashboard, Team } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
};

export default AppRoutes;
