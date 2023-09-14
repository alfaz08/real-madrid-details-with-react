import React from 'react';

const BookMark = ({individualName,totalCount,remaining}) => {
  const {name} =individualName;
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Total Cost: {totalCount}</h2>
      <h3>Remaining: {remaining}</h3>
    </div>
  );
};

export default BookMark;