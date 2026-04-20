/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Features from "./components/Features";
import VisualShowcase from "./components/VisualShowcase";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-brand-white min-h-screen selection:bg-brand-mel/30 selection:text-brand-wine">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Features />
        <VisualShowcase />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
