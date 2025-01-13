import React from 'react';

export const ContactForm = ({
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    handleSubmit,
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required={true}
                />
            </label>
            <label>
                Email:
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    // required={true}
                />
            </label>
            <label>
                Phone:
                <input
                    value={phone}
                    type={email}
                    onChange={(e) => setPhone(e.target.value)}
                    pattern="^(((([\+]61[1-9]{0,1}|([\(]{0,1}0[\)]{0,1}[1-9]{1}|[\(]{0,1}0[1-9]{1}[\)]{0,1})))([0-9]{8}|([\\s*]|[\-]{1})[0-9]{3}([\\s*]|[\-]{1})[0-9]{3}([\\s*]|[\-]{1})[0-9]{3}|(([\\s*]|[\-]{0,1})[0-9]{4}([\\s*]|[\-]{0,1})[0-9]{4})))|((1([\\s*]|[\-]{0,1})((300|800|900|902)|3[0-9]{2}))([\\s*]|[\-]{0,1})([0-9]{3}([\\s*]|[\-]{0,1})[0-9]{3}|[0-9]{6}))|((13[0-9]{1}([\\s*]|[\-]){0,1}[0-9]{3}|13([\\s*]|[\-]){1}[0-9]{2}([\\s*]|[\-]){1}[0-9]{2})))$"
                    // Aus mobile pettern^^^
                    // required={true}
                />
            </label>
            <input type="submit" />
        </form>
    );
};
