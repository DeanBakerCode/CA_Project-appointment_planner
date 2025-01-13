import React, { useState } from 'react';

import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from '../../components/tileList/TileList';

export const AppointmentsPage = ({
    appointments,
    contacts,
    handleAppointments,
}) => {
    /*
  Define state variables for 
  appointment info
  */
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [date, setdate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        /*
    Add contact info and clear data  
    */
        handleAppointments(name, contact, date, time);
        setName('');
        setContact('');
        setdate('');
        setTime('');
    };

    return (
        <div>
            <section>
                <h2>Add Appointment</h2>
                <AppointmentForm
                    title={name}
                    setTitle={setName}
                    contact={contact}
                    setContact={setContact}
                    date={date}
                    setDate={setdate}
                    time={time}
                    setTime={setTime}
                    handleSubmit={handleSubmit}
                    contacts={contacts}
                />
            </section>
            <hr />
            <section>
                <h2>Appointments</h2>
                <TileList props={appointments} />
            </section>
        </div>
    );
};
