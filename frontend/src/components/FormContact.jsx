import { useState } from "react";
import "./form.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormComponents from "./FormComponents";

export default function FormContact() {
  const {
    VITE_EMAILJS_SERVICE_ID,
    VITE_EMAILJS_TEMPLATE_ID,
    VITE_EMAILJS_PUBLIC_KEY,
  } = import.meta.env;

  const [formValue, setFormValue] = useState({
    name: "",
    surname: "",
    email: "",
    number: "",
    message: "",
  });

  const emailjsServiceId = VITE_EMAILJS_SERVICE_ID;
  const emailjsTemplateId = VITE_EMAILJS_TEMPLATE_ID;
  const emailjsPublicKey = VITE_EMAILJS_PUBLIC_KEY;

  const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const showToastMessageError = () => {
    toast.error("Erreur !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(emailjsServiceId, emailjsTemplateId, e.target, emailjsPublicKey)

      .then(
        (result) => {
          showToastMessage(result);
        },
        (error) => {
          showToastMessageError(error);
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="form-contact-container">
      <div className="top-form-container">
        <p className="form-contact-top-p">Si vous avez une question :</p>
        <h3 className="contact">Contactez-Nous</h3>
      </div>
      <form className="form-contact" onSubmit={handleSubmit}>
        <FormComponents
          label="nom :"
          name="name"
          type="text"
          onChange={handleChange}
          value={formValue.name}
        />
        <FormComponents
          label="prénom :"
          name="surname"
          type="text"
          onChange={handleChange}
          value={formValue.surname}
        />
        <FormComponents
          label="email :"
          name="email"
          type="text"
          onChange={handleChange}
          value={formValue.email}
        />
        <FormComponents
          label="numéro :"
          name="number"
          type="text"
          onChange={handleChange}
          value={formValue.number}
        />
        <label>
          <span className="label-text-form-contact">message :</span>
          <textarea
            className="textarea-form-contact"
            name="message"
            onChange={handleChange}
            maxLength={250}
            value={formValue.message}
            required
          />
        </label>
        <input className="form-contact-submit" type="submit" value="Envoyer" />
      </form>
      <ToastContainer />
    </div>
  );
}
