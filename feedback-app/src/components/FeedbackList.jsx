import React from 'react';
import FeedbackItem from './FeedbackItem';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {
  // console.log(feedback);
  const { feedback } = useContext(FeedbackContext);
  
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }
  return (
    <>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </>
  );
}

export default FeedbackList;
