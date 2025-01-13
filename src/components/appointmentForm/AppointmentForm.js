import React from 'react';
import { ContactPicker } from '../contactPicker/ContactPicker';
const getTodayString = () => {
    const [month, day, year] = new Date()
        .toLocaleDateString('en-US')
        .split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
};

export const AppointmentForm = ({
    contacts,
    title,
    setTitle,
    contact,
    setContact,
    date,
    setDate,
    time,
    setTime,
    handleSubmit,
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input
                    required={true}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </label>
            <label>
                Date:
                <input
                    type="date"
                    required={true}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    // min={getTodayString}
                />
            </label>
            <label>
                Time:
                <input
                    type="time"
                    required={true}
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
            </label>
            <label>
                Contact:
                <ContactPicker
                    contacts={contacts}
                    value={contact}
                    setContact={setContact}
                />
            </label>
            <input type="submit" />
        </form>
    );
};
