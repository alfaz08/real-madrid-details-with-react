import React from 'react';

const Banner = () => {
  return (
    <div className='container mx-auto '>
      <div className="hero bg-amber-400">
  <div className="hero-content grid  lg:flex flex-row-reverse">
    <img src={`https://i.ibb.co/SsMrpdq/sporting-news-2022-photo-with-watermark-1d0b8060-4915-4240-b315-28555fa3e661.png`} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Real Madrid CF</h1>
      <p className="py-6">"¡Hala Madrid! ...y nada más" (Spanish for 'Go Madrid and nothing more')</p>
      <button className="btn btn-warning bg-blue-800 text-white ">Get Started</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Banner;