import axios from "axios";
import { loginByUserName } from "./loginByUsername";
import { Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { userActions } from "entities/User";

jest.mock("axios");

const mockedAxios = jest.mocked(axios, true);

describe("loginByUsername.asyncThunk", () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test("", async () => {
    mockedAxios.post.mockReturnValue(
      Promise.resolve({ data: { username: "admin", id: "1" } }),
    );
    const action = loginByUserName({ username: "admin", password: "123" });

    const result = await action(dispatch, getState, undefined);

    expect(dispatch).toHaveBeenCalledWith(
      userActions.login({ username: "admin", id: "1" }),
    );
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
  });
});
