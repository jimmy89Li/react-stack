import React from 'react';
import { Link } from 'react-router';

export default function ArticlesList({ articles }) {
  return (
    <>
      {articles.map((art) => (
        <div key={art.name}>
          <Link to={'/articles/' + art.name}>
            <h3>{art.title}</h3>
          </Link>
          <p>{art.content[0].substring(0, 150)}</p>
        </div>
      ))}
    </>
  );
}
