import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "../styles/Contact.module.scss";
import Footer from "./Footer";

function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.FORMSPREE_FORM_ID);

  return (
    <div id="contact" className={`${styles.contact} section`}>
      <div className={styles.formContainer}>
        <h2>Contactez-moi</h2>
        {state.succeeded && (
          <p className={styles.thanks}>
            Merci de m'avoir contacté ! Je vous répondrai dès que possible.
          </p>
        )}
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="name">Votre nom</label>
          <input id="name" type="text" name="name" required />
          <ValidationError prefix="Nom" field="name" errors={state.errors} />

          <label htmlFor="email">Adresse e-mail</label>
          <input id="email" type="email" name="email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="message">Votre message</label>
          <textarea id="message" name="message" required />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button type="submit" disabled={state.submitting}>
            Envoyer
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default ContactForm;
