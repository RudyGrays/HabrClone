import { ServerErrorsEnum } from "app/types/globalType";
export interface CommentAuthor {
  name: string;
  id: string;
  avatar: string;
}
export interface Comment {
  author: CommentAuthor;
  id: string;
  title?: string;
  body?: string;
  postId?: string;
}

export interface CommentSchema {
  isLoading?: boolean;
  errors?: ServerErrorsEnum[] | CommentErrorsEnum[];
  data: Comment[];
}

export const enum CommentErrorsEnum {}

export type CommentErrors = CommentErrorsEnum[] | ServerErrorsEnum[];
