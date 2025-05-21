import articles from '../article-content';
import ArticlesList from '../components/ArticlesList';

export default function ArticlesListPage() {
  return (
    <>
      <h1>ArticlesList</h1>
      <ArticlesList articles={articles} />
    </>
  );
}
