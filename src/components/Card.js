import React from 'react';

const Card = () => {
  return (
    <div className="p-6 max-w-md mx-auto bg-slate-100 rounded-xl shadow-xl flex items-center space-x-4">
      <div className="shrink-0">
        <img className="h-10 w-25" src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt=""/>
      </div>
      <div>
        <div className="text-xl font-medium text-black">Kalvium Store</div>
        <p className="text-slate-500">You have a new Course!</p>
      </div>
    </div>
  );
};

export default Card;