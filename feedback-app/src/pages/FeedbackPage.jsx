import React, { useState } from 'react';
import FeedbackForm from '../components/FeedbackForm';
import FeedbackStats from '../components/FeedbackStats';
import FeedbackList from '../components/FeedbackList';
import FeedbackData from '../data/FeedbackData';
import { v4 as uuid } from 'uuid';

function FeedbackPage() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <FeedbackForm></FeedbackForm>
      <FeedbackStats feedback={feedback} />
      <FeedbackList />
    </>
  );
}

export default FeedbackPage;
