import { BrowserRouter } from "react-router-dom";
import Providers from "./Providers";
import Topbar from "./scenes/global/Topbar";

const App = () => {
  return (
    <Providers>
      <div className="app">
        <main className="content">
          <Topbar />
        </main>
      </div>
    </Providers>
  );
};

export default App;
