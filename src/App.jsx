import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import EscrowFeatures from './Components/EscrowFeatures.jsx'
import LoginPage from './Components/LoginPage.jsx'
import SignupPage from "./Components/SignupPage.jsx";
import ProductsSection from "./Components/ProductsSection.jsx";
import TrustSafetySection from "./Components/TrustSafetySection.jsx";
import Footer from "./Components/Footer.jsx";
import Products from "./Components/Products.jsx";
import Cart from "./Components/Cart.jsx";

function App() {
  return (
    <Router>
      

      <Routes>
        {/* Home Page */}
        <Route 
          path="/" 
          element={
            <>
              <Navbar />
              <Hero />
              <EscrowFeatures />
              <ProductsSection/>
              <TrustSafetySection></TrustSafetySection>
              <Footer></Footer>
              <Cart></Cart>
            </>
          } 
        />

        {/* Login Page */}
        <Route path="/login" element={<LoginPage />} />

        <Route path="/signup" element={<SignupPage/>}/>

        <Route path="/products" element={<Products/>}/>
      </Routes>

    </Router>
  )
}

export default App