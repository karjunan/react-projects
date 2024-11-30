import React from 'react';
import Header from './components/Header';
import { useState } from 'react';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeeback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} handleDelete={deleteFeeback} />
      </div>
    </>
  );
}

export default App;

// {
//   /* {showComment && commentBlock} */
// }

// // const title = 'Blog Post';
// const body = 'This is my blog post';
// const comments = [
//   {
//     id: 1,
//     text: 'Comment 1',
//   },
//   {
//     id: 2,
//     text: 'Comment 2',
//   },
//   {
//     id: 3,
//     text: 'Comment 3',
//   },
// ];
// const showComment = true;
// const commentBlock = (
//   <div className="comments">
//     <h3>Comments ({comments.length})</h3>
//     <ul>
//       {comments.map((comment, index) => (
//         <li key={index}>{comment.text}</li>
//       ))}
//     </ul>
//   </div>
// );
