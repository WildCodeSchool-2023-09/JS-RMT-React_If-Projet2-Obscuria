import Affiche from "./components/Film";
import CarouselMenu from "./components/carouselMenu";

import "./App.css";

function App() {
  return (
    <div className="appcontener">
      <CarouselMenu />
      <Affiche />
    </div>
  );
}

export default App;
