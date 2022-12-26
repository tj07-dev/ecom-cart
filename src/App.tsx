import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { ViweCart } from "./pages/ViweCart";
function App() {
  return (
    <ShoppingCartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viweCart" element={<ViweCart />} />
      </Routes>
    </ShoppingCartProvider>
  );
}

export default App;
