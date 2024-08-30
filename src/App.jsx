import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  const service = "service";
  const about = "about";
  const product = "product";

  return (
    <div>
      <Navbar service={service} about={about} product={product} />
      <Home service={service} about={about} product={product} />
    </div>
  );
}

export default App;
