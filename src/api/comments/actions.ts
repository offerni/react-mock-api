import { API_BASE_URL } from "../../constants";
import { Comment } from "./types";

export const getComments = async (): Promise<Comment[]> => {
  const response = await fetch(`${API_BASE_URL}/comments`);

  if (!response.ok) {
    throw new Error("failed");
  }

  return response.json();
};

export const getCommentById = async (id: string): Promise<Comment> => {
  const response = await fetch(`${API_BASE_URL}/comments/${id}`);

  if (!response.ok) {
    throw new Error("failed");
  }

  return response.json();
};

export const addComment = async (comment: Comment): Promise<Comment> => {
  const response = await fetch(`${API_BASE_URL}/comments`, {
    method: "POST",
    body: JSON.stringify(comment),
  });

  if (!response.ok) {
    throw new Error("failed");
  }

  return response.json();
};

export const editComment = async (
  id: string,
  comment: Comment
): Promise<Comment> => {
  const response = await fetch(`${API_BASE_URL}/comments/${id}`, {
    method: "PUT",
    body: JSON.stringify(comment),
  });

  if (!response.ok) {
    throw new Error("failed");
  }

  return response.json();
};

export const deleteComment = async (id: string): Promise<Comment> => {
  const response = await fetch(`${API_BASE_URL}/comments/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("failed");
  }

  return response.json();
};
