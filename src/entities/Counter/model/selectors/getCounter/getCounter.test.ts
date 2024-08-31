import StateSchema from "app/providers/StoreProvider/config/StateSchema";
import { getCounter } from "./getCounter";
import { CounterSchema } from "../../types/counterSchema";
import { counterActions, counterReducer } from "../../slice/CounterSlice";

describe("getCounter", () => {
  test("should return counter value", () => {
    const state: StateSchema = {
      counter: { value: 10 },
    };

    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  });

  test("increment", () => {
    const state: CounterSchema = { value: 1 };

    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 2,
    });
  });

  test("decrement", () => {
    const state: CounterSchema = { value: 1 };

    expect(counterReducer(state, counterActions.decrement())).toEqual({
      value: 0,
    });
  });
});
