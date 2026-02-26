import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Services from "./pages/services";
import WebAppDevelopment from "./pages/WebAppDevelopment";
import SoftwareDevelopment from "./pages/Softwaredevelopment";
import DataAnalytics from "./pages/DataAnalytics";
import DataWarehouse from "./pages/DataWarehouse";
import AIAutomation from "./pages/AIAutomation";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />

        <Route path="/services/web-dev" element={<WebAppDevelopment />} />
        <Route path="/services/software-dev" element={<SoftwareDevelopment />} />
        <Route path="/services/data-analytics" element={<DataAnalytics />} />
        <Route path="/services/data-warehouse" element={<DataWarehouse />} />
        <Route path="/services/ai-service" element={<AIAutomation />} />

      </Routes>
      <Footer />
    </Router>
  );
}
