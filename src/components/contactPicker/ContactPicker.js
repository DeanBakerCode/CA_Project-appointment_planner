import React from 'react';

export const ContactPicker = ({ contacts, value, name, setContact }) => {
    console.log('contact picker reloaded');
    return (
        <select
            onChange={(e) => setContact(e.target.value)}
            value={value}
            name={name}
        >
            <option value="">No Contact Selected</option>
            {console.log(contacts)}
            {contacts &&
                contacts.map((item, index) => {
                    return (
                        <option value={item.name} key={index}>
                            {item.name} hi
                        </option>
                    );
                })}
        </select>
    );
};
