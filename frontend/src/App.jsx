import "./App.css";

import axios from "axios";

function App() {
  const getobscuriaitems = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/films`)
      .then((response) => {
        console.info(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="App">
      <button onClick={getobscuriaitems} type="button">
        tutu
      </button>
      <h1>{}</h1>
    </div>
  );
}

export default App;
