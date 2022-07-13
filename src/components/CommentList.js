import React from 'react';
import CommentData from './CommentData';

export default function CommentList({comments}) {
  return (
    <div className=' w-full bg-white rounded-lg h-auto p-5 sm:p-7 my-4'>
      <p className=' text-lg text-blue-900 font-bold'>{comments.length} comment(s)</p>
      {comments && comments.map(comment => (
        <CommentData key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
