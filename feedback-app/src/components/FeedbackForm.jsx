import React from 'react';
import { useState, useEffect } from 'react';
import Button from './Button';
import Rating from './Rating';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import FeedbackItem from './FeedbackItem';

function FeedbackForm() {
  const { addFeedback, feedbackItem } = useContext(FeedbackContext);
  const [rating, setRating] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('useEffect called');
    if (feedbackItem !== null) {
      setText(feedbackItem.item.text)
      setRating(feedbackItem.item.rating)
    }
  }, [feedbackItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const feedbackForm = {
      text: text,
      rating: rating,
    };
    // handleFeedback(feedbackForm)
    addFeedback(feedbackForm);
    setText('');
    // addFeedback.push(feedbackForm);
  };
  const handleText = (e) => {
    if (text === '') {
      setIsDisabled(true);
      setMessage('Please write something');
    } else if (text !== '' && text.trim().length <= 10) {
      setIsDisabled(true);
      setMessage('Text must be at least 10 characters');
    } else {
      setIsDisabled(false);
      setMessage('');
    }

    setText(e.target.value);
    // console.log(text);
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <h2> How would like to rate your service with us ?</h2>
        <Rating
          select={(rating) => {
            setRating(+rating);
          }}
        ></Rating>
        <div className="input-group">
          <input
            onChange={handleText}
            type="text"
            placeholder="write a review"
            value={text}
          />
          <Button
            type="submit"
            isDisabled={isDisabled}
            version={`${isDisabled ? '' : 'primary'}`}
          >
            Send
          </Button>
        </div>
      </form>
      {message && <div className="message">{message}</div>}
    </div>
  );
}

export default FeedbackForm;
