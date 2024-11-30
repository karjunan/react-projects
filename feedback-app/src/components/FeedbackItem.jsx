import { FaTimes } from 'react-icons/fa';
import React from 'react';
import { useState } from 'react';

function FeedbackItem({ item, handleDelete }) {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState('Example of a feedback item');
  // const handleClick = () => {
  //   setRating((rating) => rating + 1);
  // };

  return (
    <div className="card">
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </div>
  );
}

export default FeedbackItem;
