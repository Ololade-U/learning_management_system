import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <div>
      <ScrollToTop/>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
