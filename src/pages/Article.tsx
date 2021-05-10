import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArticleById } from "../api/articles/actions";
import { Article } from "../api/articles/types";
import { getComments } from "../api/comments/actions";
import { Comment } from "../api/comments/types";
import { getUsers } from "../api/users/actions";

interface PostParams {
  id: string;
}

function Comments() {
  const [comments, setComments] = useState<Comment[] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const users = await getUsers();
      const commentsRes = await getComments();

      setComments(
        commentsRes.map((comment) => {
          const commentWithUserInfo = { ...comment };
          const foundUser = users.find((user) => {
            // Kinda shitty but good for now
            return parseInt(user.id || "") === comment.user_id;
          });
          commentWithUserInfo.user = foundUser;

          return commentWithUserInfo;
        })
      );
    };

    fetchData();
  }, []);

  if (!comments) {
    return <p>loading...</p>;
  }

  return (
    <div>
      {comments?.map((comment) => {
        return (
          <p key={comment.id}>
            {comment.user ? comment.user.name : "Anonymous"}: {comment.content}
          </p>
        );
      })}
    </div>
  );
}

export function ArticlePage() {
  const { id } = useParams<PostParams>();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    getArticleById(id).then((response) => {
      setArticle(response);
    });
  }, [id]);

  if (!article) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <h2>Comments</h2>
      <Comments />
    </div>
  );
}
