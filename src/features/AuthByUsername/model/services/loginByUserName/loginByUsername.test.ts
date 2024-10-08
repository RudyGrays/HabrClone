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
  let extra: { api: typeof mockedAxios };

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
    extra = { api: mockedAxios };
  });

  test("login fulfilled", async () => {
    const userValue = { username: "admin", id: "1" };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
    const action = loginByUserName({ username: "admin", password: "123" });

    const result = await action(dispatch, getState, extra);

    expect(dispatch).toHaveBeenCalledWith(userActions.login(userValue));
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
  });

  test("login rejected", async () => {
    mockedAxios.post.mockReturnValue(
      Promise.resolve({ message: "User not found" }),
    );
    const action = loginByUserName({ username: "admin", password: "123" });

    const result = await action(dispatch, getState, extra);
    expect(result.payload).toEqual("No data in response");
    expect(dispatch).not.toHaveBeenCalledWith(userActions.login());
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
  });
});
