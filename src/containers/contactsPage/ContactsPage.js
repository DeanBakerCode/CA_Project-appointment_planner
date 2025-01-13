import React, { useState, useEffect } from 'react';

import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = ({ contacts, handleContacts }) => {
    /*
  Define state variables for 
  contact info and duplicate check
  */
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        /*
        Add contact info and clear data
        if the contact name is not a duplicate
        */
        if (!exists(name)) {
            console.log('saving...contact:', name);
            handleContacts(name, phone, email);
        }
        setName('');
        setPhone('');
        setEmail('');
    };

    /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
    const exists = (name) => {
        return contacts.some(
            (contactObj) => contactObj.name.toLowerCase() === name.toLowerCase()
        );
    };

    return (
        <div>
            <section>
                <h2>Add Contact</h2>
                <ContactForm
                    name={name}
                    setName={setName}
                    phone={phone}
                    setPhone={setPhone}
                    email={email}
                    setEmail={setEmail}
                    handleSubmit={handleSubmit}
                />
            </section>
            <hr />
            <section>
                <h2>Contacts</h2>
                <TileList props={contacts} />
            </section>
        </div>
    );
};
