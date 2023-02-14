import Providers from "./Providers";
import Topbar from "./components/molecules/Topbar";
import Sidebar from "./components/organisms/sidebar/Sidebar";
import AppRoutes from "./routes/AppRoutes";

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
