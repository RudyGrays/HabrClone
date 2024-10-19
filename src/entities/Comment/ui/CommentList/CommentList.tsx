import { FC, memo } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./CommentList.module.scss";
import { Comment } from "entities/Comment";
import { Text } from "shared/ui/Text";
import { useTranslation } from "react-i18next";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { useNavigate } from "react-router-dom";
import { RoutePaths, Routes } from "app/providers/RouterProvider";
interface CommentListProps {
  someClasses?: string;
  comments: Comment[];
  isLoading?: boolean;
}

const CommentList: FC<CommentListProps> = memo(
  ({ someClasses, comments = [], isLoading = false }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    if (isLoading) {
      return (
        <>
          <Skeleton className={mainClasses.skeleton} width="100%" height={50} />
          <Skeleton className={mainClasses.skeleton} width="100%" height={50} />
          <Skeleton className={mainClasses.skeleton} width="100%" height={50} />
        </>
      );
    }

    return (
      <ul className={classNames(mainClasses.CommentList, {}, [someClasses])}>
        {comments.length > 0 ? (
          comments.map(comment => {
            return (
              <li key={comment.id}>
                <span className={mainClasses.title}>
                  <div
                    onClick={() =>
                      navigate(
                        `${RoutePaths[Routes.PROFILE_WITH_ID]}${comment.author.id}`,
                      )
                    }
                  >
                    <Avatar src={comment.author.avatar} size={50} />
                  </div>
                  {comment.title && <Text tag="h3">{comment.title}</Text>}
                </span>

                {comment.body && <Text tag="h2">{comment.body}</Text>}
              </li>
            );
          })
        ) : (
          <Text color="secondary">{t<string>("комментарии отсутствуют")}</Text>
        )}
      </ul>
    );
  },
);

export { CommentList };
