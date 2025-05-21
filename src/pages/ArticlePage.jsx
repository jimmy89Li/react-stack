import { useParams, useLoaderData } from 'react-router';
import articles from '../article-content';
import axios from 'axios';
import CommentsList from '../components/CommentsList';
import { useState } from 'react';
import AddCommentForm from '../components/AddCommentForm';

export default function ArticlePage() {
  const { name } = useParams();
  const { upvotes: initialUpvotes, comments: initialComments } =
    useLoaderData();
  const [upvotes, setUpvotes] = useState(initialUpvotes);
  const [comments, setComments] = useState(initialComments);

  const article = articles.find((art) => art.name === name);

  async function onUpvoteClick() {
    const response = await axios.post('/api/v1/articles/' + name + '/upvote');
    const data = response.data;
    setUpvotes(data.upvotes);
  }

  async function onAddComment({ nameText, commentText }) {
    const response = await axios.post(
      '/api/v1/articles/' + name + '/comments',
      {
        postedBy: nameText,
        text: commentText,
      }
    );
    const data = response.data;
    setComments(data.comments);
  }

  return (
    <>
      <h1>{article.title}</h1>
      <button onClick={onUpvoteClick}>Upvote!</button>
      <p>This article has {upvotes} upvotes!</p>
      {article.content.map((p) => (
        <p key={p}>{p}</p>
      ))}
      <AddCommentForm onAddComment={onAddComment} />
      <CommentsList comments={comments} />
    </>
  );
}

export async function articleLoader({ params }) {
  const response = await axios.get(`/api/v1/articles/${params.name}`);
  const { upvotes, comments } = response.data;
  return { upvotes, comments };
}
