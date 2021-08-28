import Header from "components/Header"
import HeroSection from "components/HeroSection"
import Categories from "components/Categories"
import Campeigns from "components/Campeigns"
import Favorites from "components/Favorites"
import MobileApp from "components/MobileApp"
import Cards from "components/Cards"
import Footer from "components/Footer"


function App() {
  return (
    <div className="overflow-x-hidden">
      <Header /> 
      <HeroSection /> 
      <Categories /> 
      <Campeigns /> 
      <Favorites /> 
      <MobileApp /> 
      <Cards /> 
      <Footer /> 
    </div>
  );
}

export default App;
