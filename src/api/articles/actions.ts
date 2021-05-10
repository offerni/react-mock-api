import { API_BASE_URL } from "../../constants";
import { Article } from "./types";

export const getArticles = async (): Promise<Article[]> => {
  const response = await fetch(`${API_BASE_URL}/articles`);

  if (!response.ok) {
    throw new Error("failed");
  }

  return response.json();
};

export const getArticleById = async (id: string): Promise<Article> => {
  const response = await fetch(`${API_BASE_URL}/articles/${id}`);

  if (!response.ok) {
    throw new Error("failed");
  }

  return response.json();
};

export const addArticle = async (article: Article): Promise<Article> => {
  const response = await fetch(`${API_BASE_URL}/articles`, {
    method: "POST",
    body: JSON.stringify(article),
  });

  if (!response.ok) {
    throw new Error("failed");
  }

  return response.json();
};

export const editArticle = async (id: string, article: Article) => {
  const response = await fetch(`${API_BASE_URL}/articles/${id}`, {
    method: "PUT",
    body: JSON.stringify(article),
  });

  if (!response.ok) {
    throw new Error("failed");
  }

  return response.json();
};

export const deleteArticle = async (id: string) => {
  const response = await fetch(`${API_BASE_URL}/articles/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("failed");
  }

  return response.json();
};
