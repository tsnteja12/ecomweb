import React from 'react'

const Title = ({ text1, text2 }) => {
  return (
    <div className="flex flex-col items-start mb-5">
      <h2 className="text-xl uppercase font-extrabold tracking-wide text-black">
        {text1}{' '}
        <span className="text-gray-500">{text2}</span>
      </h2>
      <div className="mt-1 w-16 h-1 bg-gray-500 rounded-sm"></div>
    </div>
  );
};



export default Title