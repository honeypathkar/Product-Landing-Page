import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  const home = "home";
  const service = "service";
  const product = "product";

  return (
    <div>
      <Navbar service={service} home={home} product={product} />
      <Home service={service} home={home} product={product} />
      <Footer />
    </div>
  );
}

export default App;
