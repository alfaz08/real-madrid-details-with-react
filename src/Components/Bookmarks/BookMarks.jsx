import React from 'react';
import Card from '../Card/Card';
import BookMark from '../Bookmark/BookMark';
const BookMarks = ({totalPlayer,playerName,totalCount,remaining}) => {
  console.log(remaining);
  return (
    <div className='w-1/3'>
      <h4>Bookmark: {totalPlayer}</h4>
      {
        playerName.map((individualName,idx)=>
        <BookMark key={idx} individualName={individualName} totalCount={totalCount} remaining={remaining}></BookMark>
      )
      }
    </div>
  );
};

export default BookMarks;