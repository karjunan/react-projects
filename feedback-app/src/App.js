import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import FeedbackPage from './pages/FeedbackPage';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<FeedbackPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </FeedbackProvider>
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
