import { createContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

const FeedbackContext = createContext(null);

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 5,
      text: 'coming out for context 1',
    },
    {
      id: 2,
      rating: 3,
      text: 'coming out for context 2',
    },
    {
      id: 3,
      rating: 4,
      text: 'coming out for context 3',
    },
  ]);

  const [feedbackItem, setFeedbackItem] = useState({ item: {}, edit: false });

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuid();
    console.log('Feedback Length ', newFeedback);
    setFeedback([newFeedback, ...feedback]);
  };

  const editFeedback = (item) => {
    setFeedbackItem({ item, edit: true });
    console.log('updating feedback id', feedbackItem);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackItem,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
