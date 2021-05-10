import { API_BASE_URL } from "../../constants";
import { User } from "./types";

export const getUsers = async (): Promise<User[]> => {
  const response = await fetch(`${API_BASE_URL}/users`);

  if (!response.ok) {
    throw new Error("failed");
  }

  return response.json();
};

export const getUserById = async (id: string): Promise<User> => {
  const response = await fetch(`${API_BASE_URL}/users/${id}`);

  if (!response.ok) {
    throw new Error("failed");
  }

  return response.json();
};

export const addUser = async (user: User): Promise<User> => {
  const response = await fetch(`${API_BASE_URL}/users`, {
    method: "POST",
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("failed");
  }

  return response.json();
};

export const editUser = async (id: string, user: User): Promise<User> => {
  const response = await fetch(`${API_BASE_URL}/users/${id}`, {
    method: "PUT",
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("failed");
  }

  return response.json();
};

export const deleteUser = async (id: string): Promise<User> => {
  const response = await fetch(`${API_BASE_URL}/users/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("failed");
  }

  return response.json();
};
