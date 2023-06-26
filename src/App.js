import "./App.css";
import Brand from "./components/Brands/Brands";
import { BrandContextProvider } from "./store/brand-context";

function App() {
  return (
    <div className="app">
      <BrandContextProvider>
        <Brand />
      </BrandContextProvider>
    </div>
  );
}

export default App;
