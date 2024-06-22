import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
// import contactsData from '../../contactsData.json';
// import { useState, useEffect } from 'react';
import css from "./App.module.css";

export default function App() {
  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = window.localStorage.getItem('saveContacts');
  //   if (savedContacts !== null) {
  //     return JSON.parse(savedContacts);
  //   } else {
  //     return contactsData;
  //   }
  // });

  // useEffect(() => {
  //   window.localStorage.setItem('saveContacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
