import { useState } from 'react';

export default function AddCommentForm({ onAddComment }) {
  const [nameText, setNameText] = useState('');
  const [commentText, setCommentText] = useState('');

  return (
    <div>
      <h3>Add a comment</h3>
      <label htmlFor='name'>
        Name:
        <input
          id='name'
          type='text'
          value={nameText}
          onChange={(e) => setNameText(e.target.value)}
        />
      </label>
      <label htmlFor='comment'>
        Comment:
        <input
          id='comment'
          type='text'
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
      </label>
      <button
        onClick={() => {
          onAddComment({ nameText, commentText });
          setNameText('');
          setCommentText('');
        }}
      >
        Add comment!
      </button>
    </div>
  );
}
