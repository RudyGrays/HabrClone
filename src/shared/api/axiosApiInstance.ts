import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "shared/constants/constants";

export const $api = axios.create({
  baseURL: __API_URL__,
  headers: {
    Authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY),
  },
});
