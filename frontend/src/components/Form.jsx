import { useState } from "react";
import "./form.css";
import emailjs from "@emailjs/browser";

function Form() {
  const [formValue, setFormValue] = useState({
    name: "",
    surname: "",
    email: "",
    number: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_uvr52fi",
        "template_hx0zcsd",
        e.target,
        "ttUTtvhOkhdLJGQTc"
      )

      .then(
        (result) => {
          console.info(result.text);
        },
        (error) => {
          console.info(error.text);
        }
      );
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
        <label htmlFor="name">Nom :</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formValue.name}
          id="name"
          required
        />
        <label htmlFor="surname">Prénom :</label>
        <input
          type="text"
          name="surname"
          onChange={handleChange}
          value={formValue.surname}
          id="surname"
          required
        />
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={formValue.email}
          id="email"
          pattern="^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$"
          required
        />
        <label htmlFor="number">Numéro (facultatif) :</label>
        <input
          name="number"
          type="text"
          onChange={handleChange}
          value={formValue.number}
          id="number"
          maxLength={10}
        />
        <label htmlFor="description">Description :</label>
        <textarea
          name="message"
          onChange={handleChange}
          id="description"
          maxLength={250}
          required
        />
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
}

export default Form;
