import React from 'react';

const Card = ({player,handlePlayer}) => {

  const {id,name,age,style,salary,image} =player;


  return (
    <div> 
      <div className="card shadow-xl ">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl w-60 h-64 " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <h3 className='text-xl font-bold'>Age: {age}</h3>
    <h3 className='text-xl font-bold'>Position: {style}</h3>
    <h3 className='text-xl font-bold'>Salary: {salary}</h3>
    <div className="card-actions">
      <button onClick={()=>handlePlayer(player)} className="btn btn-accent bg-amber-400 text-black">Buy Now</button>
    </div>
  </div>
</div>





    </div>
  );
};

export default Card;