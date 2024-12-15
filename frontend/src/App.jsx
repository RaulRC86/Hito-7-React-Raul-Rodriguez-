import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Footer, Header, Navbar} from "./components"
import {Cart, Home, Login, Register, Pizza, Profile, NotFound} from "./pages"
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <>
      <BrowserRouter>
      <CartProvider>
        <Header />
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/p001" element={<Pizza />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
