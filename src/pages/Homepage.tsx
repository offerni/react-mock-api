import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../api/articles/actions";
import { Article } from "../api/articles/types";

export function Homepage() {
  const [articles, setArticles] = useState<Article[] | null>(null);
  useEffect(() => {
    getArticles().then((response) => {
      setArticles(response);
    });
  }, []);

  if (!articles) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1>Home</h1>
      <h2>Articles</h2>
      {articles.length === 0 ? <p>No articles found.</p> : null}
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.id}>
              <Link to={`/article/${article.id}`}> {article.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
