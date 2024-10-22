import { FC, useState } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./AddCommentForm.module.scss";
import { Comment } from "entities/Comment";
import { Input } from "shared/ui/Input";
import { Button, ButtonVariants } from "shared/ui/Button";
import { t } from "i18next";
import { CommentAuthor } from "entities/Comment/model/types/CommentSchema";

interface AddCommentFormProps {
  someClasses?: string;
  addCommentCallback: (comment: Omit<Comment, "id">) => void;
  isLoading?: boolean;
  errors?: string[];
  authorData: CommentAuthor;
  entityId: string;
}

const AddCommentForm: FC<AddCommentFormProps> = ({
  someClasses,
  addCommentCallback,
  authorData: { id, avatar, name },
  errors,
  isLoading,
  entityId,
}) => {
  const [comment, setComment] = useState<Omit<Comment, "id">>({
    postId: entityId,
    author: {
      id,
      avatar,
      name,
    },
    body: "",
    title: "",
  });

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        addCommentCallback(comment);
      }}
      className={classNames(mainClasses.AddCommentForm, {}, [someClasses])}
    >
      <Input
        title="body"
        value={comment.body}
        onChange={e =>
          setComment(prev => {
            return { ...prev, body: String(e.target.value) };
          })
        }
      />
      <Input
        title="title"
        value={comment.title}
        onChange={e =>
          setComment(prev => {
            return { ...prev, title: String(e.target.value) };
          })
        }
      />
      <Button type="submit" variants={[ButtonVariants.primary]}>
        {t<string>("отправить")}
      </Button>
    </form>
  );
};

export default AddCommentForm;
