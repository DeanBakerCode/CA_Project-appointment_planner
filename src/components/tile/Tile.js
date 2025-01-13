import React from 'react';

export const Tile = ({ name, date, time, description }) => {
    return (
        <div className="tile-container">
            <p className="tile-title">{name}</p>
            <p>
                {date && `Date: ${date}`} {time && `Time: ${time}`}
            </p>
            <hr />
        </div>
    );
};
