import React from 'react';

export default function HeroCard({ src, name, title, className }) {
  return (
    <div className={`flex flex-col items-center text-center mt-10 bg-white p-8 pl-14 pr-14 ${className}`}>
      <div className="relative">
        <img
          src={src}
          alt="Your Photo"
          className="rounded-full h-32 w-32 object-cover overflow-hidden border-[3px] border-black"
        />
      </div>
      <h1 className='font-medium text-xl mt-2'>
        {name}
      </h1>
      <p className='font-normal text-xs'>
        {title}
      </p>
    </div>
  );
}
