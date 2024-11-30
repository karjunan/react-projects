import React from 'react';
import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback, handleDelete }) {
  // console.log(feedback);

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }
  return (
    <>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </>
  );
}

export default FeedbackList;
