import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';


const Cards = ({handlePlayer}) => {

  const [players,setPlayers] =useState([]);

  useEffect(()=>{
    fetch('./data.json')
    .then(res=>res.json())
    .then(data=>setPlayers(data))
  },[])




  return (
    <div className='w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
      {
        players.map((player,idx)=>
          <Card key={idx} player={player} handlePlayer={handlePlayer}></Card>
          )
      }
    </div>
  );
};

export default Cards;