import { BrowserRouter, Route, Routes } from "react-router-dom";
import Providers from "./Providers";
import Dashboard from "./scenes/dashboard";
import Topbar from "./scenes/global/Topbar";

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
