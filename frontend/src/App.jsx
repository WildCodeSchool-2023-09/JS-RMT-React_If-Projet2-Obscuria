import CarouselMenu from "./components/carouselMenu";
import DisplayMovie from "./components/DisplayMovie";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FormContact from "./components/FormContact";
import Button from "./components/Button";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <CarouselMenu />
      <DisplayMovie />
      <FormContact />
      <Footer />
    </div>
  );
}

export default App;
