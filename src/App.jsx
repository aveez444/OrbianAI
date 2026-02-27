// src/App.jsx
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
import CloudServices from "./pages/CloudServices";
import EnterpriseConsulting from "./pages/EnterpriseConsulting";
import Career from "./pages/career";
import Portfolio from "./pages/portfolio";
import ScrollToTop from "./components/ScrollToTop";



export default function App() {
  return (
    <Router>
      <ScrollToTop /> {/* This automatically scrolls to top on route change */}
      <Navbar />
      <div className="pt-20"> {/* offset for fixed navbar */}
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

          {/* new service routes */}
          <Route path="/services/cloud" element={<CloudServices />} />
          <Route path="/services/consulting" element={<EnterpriseConsulting />} /> 

          <Route path="/career" element={<Career />} />
          <Route path="/portfolio" element={<Portfolio />} />


        
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
