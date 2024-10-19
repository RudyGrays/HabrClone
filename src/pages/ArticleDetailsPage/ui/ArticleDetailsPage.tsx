import { FC, useCallback, useEffect } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import cls from "./ArticleDetailsPage.module.scss";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "app/providers/StoreProvider/config/store";
import {
  ArticleBlock,
  ArticleBlockType,
  ArticleReducer,
  getArticleById,
  getArticleData,
  getArticleErrors,
  getArticleIsLoading,
} from "entities/Acticle";
import { useSelector } from "react-redux";
import { useDynamicReducerLoader } from "shared/helpers/hooks/useDynamicReducerLoader/useDynamicReducerLoader";
import { ArticleCodeBlockComponent } from "./ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleTextBlockComponent } from "./ArticleTextBlockComponent/ArticleTextBlockComponent";
import { ArticleImageBlockComponent } from "./ArticleImageBlockComponent/ArticleImageBlockComponent";
import { Text } from "shared/ui/Text";
import { ic_calendar_today } from "react-icons-kit/md/ic_calendar_today";
import Icon from "react-icons-kit";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { ic_remove_red_eye } from "react-icons-kit/md/ic_remove_red_eye";
import { Comment, CommentList } from "entities/Comment";
import {
  CommentReducer,
  getComments,
  getCommentsData,
  getCommentsErrors,
  getCommentsLoading,
} from "entities/Comment";
import { AddCommentForm } from "features/AddCommentForm";
import {
  getProfileById,
  getProfileState,
  profileReducer,
} from "entities/Profile";
import { addComment } from "features/AddCommentForm/model/services/addComment";
import { getUserId } from "entities/User";
import { CommentAuthor } from "entities/Comment/model/types/CommentSchema";
interface ArticleDetailsPageProps {
  someClasses?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ someClasses }) => {
  const { t } = useTranslation();
  const { id } = useParams();
  const dispatch = useAppDispatch();
  //articleState
  const isLoading = useSelector(getArticleIsLoading);
  const article = useSelector(getArticleData);
  const errors = useSelector(getArticleErrors);
  //commentsState
  const comments = useSelector(getCommentsData);
  const commentsLoading = useSelector(getCommentsLoading);
  const commentsErrors = useSelector(getCommentsErrors);
  //addCommentFormHandlersAndState
  const userId = useSelector(getUserId);
  const profile = useSelector(getProfileState);

  const authorData: CommentAuthor = {
    avatar: profile.avatar,
    id: profile.id,
    name: profile.name,
  };

  const addCommentHandler = useCallback(
    async (comment: Omit<Comment, "id">) => {
      await dispatch(addComment(comment));
      dispatch(getComments({ byValue: id }));
    },
    [],
  );
  //-------------------------
  useDynamicReducerLoader("article", ArticleReducer);
  useDynamicReducerLoader("comment", CommentReducer);
  useDynamicReducerLoader("profile", profileReducer);

  useEffect(() => {
    dispatch(getArticleById(id));
    dispatch(getComments({ byValue: id }));
    dispatch(getProfileById(userId));
  }, [dispatch, id]);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return (
          <ArticleCodeBlockComponent
            key={block.id}
            block={block}
            className={cls.block}
          />
        );
      case ArticleBlockType.IMAGE:
        return (
          <ArticleImageBlockComponent
            key={block.id}
            block={block}
            className={cls.block}
          />
        );
      case ArticleBlockType.TEXT:
        return (
          <ArticleTextBlockComponent
            key={block.id}
            className={cls.block}
            block={block}
          />
        );
      default:
        return null;
    }
  }, []);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton
          className={cls.avatar}
          width={200}
          height={200}
          border="50%"
        />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
      </>
    );
  } else if (errors.length > 0) {
    content = (
      <Text className={cls.error} align="center" color="error">
        {t<string>("Произошла ошибка при загрузке статьи.")}
      </Text>
    );
  } else {
    content = (
      <>
        <div className={cls.avatarWrapper}>
          <Avatar size={200} src={article?.img} className={cls.avatar} />
        </div>
        <Text className={cls.title}>{article?.title}</Text>
        <Text className={cls.title}>{article?.subtitle}</Text>
        <div className={cls.articleInfo}>
          <Icon className={cls.icon} icon={ic_remove_red_eye} />
          <Text>{article?.views}</Text>
        </div>
        <div className={cls.articleInfo}>
          <Icon className={cls.icon} icon={ic_calendar_today} />
          <Text>{article?.createdAt}</Text>
        </div>
        {article?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [someClasses])}>
      <div className={cls.wrapper}>
        {content}

        {article && (
          <>
            <Text className={cls.commentTitle} align="center">
              {t<string>("комментарии")}
            </Text>
            <AddCommentForm
              authorData={authorData}
              addCommentCallback={addCommentHandler}
              entityId={id}
            />
            <CommentList isLoading={commentsLoading} comments={comments} />
          </>
        )}
      </div>
    </div>
  );
};

export default ArticleDetailsPage;
