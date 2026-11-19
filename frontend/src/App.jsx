import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Header from "./components/shared/Header";
import Pattern from "./components/shared/Pattern";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import Contact from "./Pages/Contact";
import ClientResults from "./Pages/ClientResults";
import BookWalkthrough from "./Pages/BookWalkthrough";
import ClipWipeCurtain from "./components/shared/ClipWipeCurtain";

// Direct animated page routes without using <Outlet />
const AnimatedPages = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <ClipWipeCurtain key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/client-results" element={<ClientResults />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-walkthrough" element={<BookWalkthrough />} />
        </Routes>
      </ClipWipeCurtain>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <div className="relative flex flex-col min-h-screen bg-midnight">
        {/* Background ambient grid pattern */}
        <Pattern />

        {/* Global Fixed Header */}
        <Header />

        {/* Main Content Area (No Outlet Used) */}
        <main className="flex-1 pt-21">
          <AnimatedPages />
        </main>
      </div>
    </Router>
  );
};

export default App;
