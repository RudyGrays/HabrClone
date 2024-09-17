import { screen } from "@testing-library/react";
import { Header } from "widgets/Header";

import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { StateSchema } from "app/providers/StoreProvider";

describe("Header", () => {
  test("initial test", () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authorized: false,
      },
    };

    componentRender(<Header />, {
      initialState: state,
    });

    expect(screen.getByTestId("header_test")).toBeInTheDocument();
  });
});
