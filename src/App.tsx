import Providers from "./Providers";
import Topbar from "./components/Topbar";
import Sidebar from "./scenes/global/sidebar/Sidebar";
import AppRoutes from "./routes/AppRoutes";
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
        <Sidebar />
        <main className="content">
          <Topbar />
          <AppRoutes />
        </main>
      </div>
    </Providers>
  );
};

export default App;
