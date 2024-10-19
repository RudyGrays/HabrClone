export { getComments } from "./model/services/getComments";

export {
  Comment,
  CommentErrors,
  CommentErrorsEnum,
  CommentSchema,
} from "./model/types/CommentSchema";

export {
  getCommentsData,
  getCommentsErrors,
  getCommentsLoading,
} from "./model/selectors/selectors";

export {
  CommentActions,
  CommentReducer,
  CommentSlice,
} from "./model/slice/CommentSlice";

export { CommentList } from "./ui/CommentList/CommentList";
