import { Route, Routes } from "react-router-dom";
import Providers from "./Providers";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
// import Team from "./scenes/team";
// import Invoices from "./scenes/invoices";
// import Dashboard from "./scenes/dashboard";
// import Dashboard from "./scenes/dashboard";
// import Dashboard from "./scenes/dashboard";
// import Dashboard from "./scenes/dashboard";
// import Dashboard from "./scenes/dashboard";
// import Dashboard from "./scenes/dashboard";
// import Dashboard from "./scenes/dashboard";

const App = () => {
  return (
    <Providers>
      <div className="app">
        <main className="content">
          <Topbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Providers>
  );
};

export default App;
