// ArrayBars.js

import React from 'react';

const ArrayBars = ({ array }) => {
  return (
    <div className="array-container">
      {array.map((value, index) => (
        <div
          key={index}
          className="array-bar"
          style={{ height: `${value * 3}px` }} // Adjust height of bars based on array values
        ></div>
      ))}
    </div>
  );
};

export default ArrayBars;
