import Header from "./components/Header/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { ViewCart } from "./pages/ViewCart";

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/viweCart" element={<ViewCart />} />
        </Routes>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
