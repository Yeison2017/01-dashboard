import { Route, Routes } from "react-router-dom";
import {
  Contacts,
  Dashboard,
  Team,
  Invoices,
  Form,
  CalendarPage,
  FaqPage,
  BarPage,
} from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/form" element={<Form />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/bar" element={<BarPage />} />
    </Routes>
  );
};

export default AppRoutes;
