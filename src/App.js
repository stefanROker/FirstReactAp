import "./App.css";
import Brand from "./components/AdminPanel/Brands/Brands";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div id="admin-panel">
        <Sidebar />
        <Brand />
      </div>
    </div>
  );
}

export default App;
