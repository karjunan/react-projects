import React from 'react';

const title = 'Blog Post';
const body = 'This is my blog post';
const comments = [
  {
    id: 1,
    text: 'Comment 1',
  },
  {
    id: 2,
    text: 'Comment 2',
  },
  {
    id: 3,
    text: 'Comment 3',
  },
];
const showComment = true;
const commentBlock = (
  <div className="comments">
    <h3>Comments ({comments.length})</h3>
    <ul>
      {comments.map((comment, index) => (
        <li key={index}>{comment.text}</li>
      ))}
    </ul>
  </div>
);
function App() {
  return (
    <>
      <h1>{title}</h1>
      <p>{body}</p>
      {showComment && commentBlock}
    </>
  );
}

export default App;
