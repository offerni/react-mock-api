import { User } from "../users/types";

export interface Comment {
  id: string;
  createdAt: string;
  content: string;
  article_id: number;
  user_id: number;
  user?: User;
}
