import React from 'react';

const Message = ({ message }) => {
  return (
    <div className="text-center p-10">
      <p className="text-3xl font-bold text-blue-500">{message}</p>
    </div>
  );
};

export default Message;
