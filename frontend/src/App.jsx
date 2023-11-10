import Title from "./components/Title";
import Footer from "./components/Footer";
import Affiche from "./components/Film";
import Form from "./components/Form";
import Nav from "./components/Nav";
import "./App.css";
import Pub from "./components/Pub";

function App() {
  return (
    <div>
      <Title />
      <Pub />
      <Nav />
      <Affiche />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
