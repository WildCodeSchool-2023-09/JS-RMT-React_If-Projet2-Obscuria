import { useState } from "react";

function Form() {
  const [formValue, setFormValue] = useState({
    name: "",
    surname: "",
    email: "",
    number: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = ({ target: { name, value } }) => {
    setFormValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="form-container">
      <div className="top-form-container">
        <p>Si vous avez une question :</p>
        <h3 className="contact">Contactez-Nous</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">nom:</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formValue.name}
          id="name"
          required
        />
        <label htmlFor="surname">prenom:</label>
        <input
          type="text"
          name="surname"
          onChange={handleChange}
          value={formValue.surname}
          id="surname"
          required
        />
        <label htmlFor="email">email:</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={formValue.email}
          id="email"
          pattern="^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$"
          required
        />
        <label htmlFor="numero">numéro (falcultif):</label>
        <input
          name="number"
          type="text"
          onChange={handleChange}
          value={formValue.number}
          id="number"
          maxLength={10}
        />
        <label htmlFor="description">description:</label>
        <textarea
          name="description"
          onChange={handleChange}
          id="decription"
          maxLength={250}
          required
        />
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
}
export default Form;
