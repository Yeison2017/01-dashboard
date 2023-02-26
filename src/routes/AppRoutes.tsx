import { Route, Routes } from "react-router-dom";
import { MainRoutesName } from "../helpers";
import {
  ContactsPage,
  Dashboard,
  TeamPage,
  InvoicesPage,
  FormPage,
  CalendarPage,
  FaqPage,
  BarPage,
  PiePage,
  LinePage,
  GeographyPage,
} from "../pages";

const AppRoutes = () => {
  const {
    main,
    team,
    contacts,
    invoices,
    form,
    calendar,
    faq,
    bar,
    pie,
    line,
    geography,
  } = MainRoutesName;
  return (
    <Routes>
      <Route path={main} element={<Dashboard />} />
      <Route path={team} element={<TeamPage />} />
      <Route path={contacts} element={<ContactsPage />} />
      <Route path={invoices} element={<InvoicesPage />} />
      <Route path={form} element={<FormPage />} />
      <Route path={calendar} element={<CalendarPage />} />
      <Route path={faq} element={<FaqPage />} />
      <Route path={bar} element={<BarPage />} />
      <Route path={pie} element={<PiePage />} />
      <Route path={line} element={<LinePage />} />
      <Route path={geography} element={<GeographyPage />} />
    </Routes>
  );
};

export default AppRoutes;
