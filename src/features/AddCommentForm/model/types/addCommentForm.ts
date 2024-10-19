import { Comment } from "entities/Comment";
export interface AddCommentFormSchema {
  isLoading: boolean;
  errors: string[];
  data?: Comment;
}
