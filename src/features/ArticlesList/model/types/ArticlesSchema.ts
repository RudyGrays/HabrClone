import { EntityState } from "@reduxjs/toolkit";
import { Article } from "entities/Acticle";

export interface ArticlesSchema extends EntityState<Article, string> {
  isLoading?: boolean;
  errors?: string[];
}
