import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Store from "./components/Store";
import ShoppingCartContext from "./context/ShoppingCartContext";
import Home from "./pages/Home";

function App() {
  return (
    <ShoppingCartContext>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Container>
    </ShoppingCartContext>
  );
}

export default App;
