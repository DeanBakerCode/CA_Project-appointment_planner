import React from 'react';
import { Tile } from '../tile/Tile';

export const TileList = ({ props }) => {
    const listArr = props;
    return (
        <div>
            {listArr.map((item, index) => {
                return (
                    <Tile
                        key={index}
                        name={item.name}
                        description={item.description}
                        //   extra items below
                        date={item.date}
                        time={item.time}
                    />
                );
            })}
        </div>
    );
};
