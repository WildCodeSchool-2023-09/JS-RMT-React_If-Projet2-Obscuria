import Title from "./components/Title";
import Footer from "./components/Footer";
import Affiche from "./components/Film";
import Form from "./components/Form";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <div>
      <Title />
      <Nav />
      <Affiche />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
