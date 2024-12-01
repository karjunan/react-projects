import { FaEdit, FaTimes } from 'react-icons/fa';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  // const handleClick = () => {
  //   setRating((rating) => rating + 1);
  // };

  return (
    <div className="card">
      <div className="num-display">{item.rating}</div>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="green" />
      </button>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </div>
  );
}

export default FeedbackItem;
