import CarouselMenu from "./components/carouselMenu";
import DisplayMovie from "./components/DisplayMovie";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FormContact from "./components/FormContact";
import "./App.css";

function App() {
  return (
    <div>
      <CarouselMenu />
      <Header />
      <DisplayMovie />
      <FormContact />
      <Footer />
    </div>
  );
}

export default App;
