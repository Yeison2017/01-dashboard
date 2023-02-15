import { Route, Routes } from "react-router-dom";
import { Contacts, Dashboard, Team, Invoices } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/invoices" element={<Invoices />} />
    </Routes>
  );
};

export default AppRoutes;
