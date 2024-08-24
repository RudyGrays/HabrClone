import { render, screen } from "@testing-library/react";

import { Button, ButtonVariants } from "shared/ui/Button";

describe("Button", () => {
  test("initial test button", () => {
    render(<Button></Button>);
    expect(screen.getByTestId("button_test")).toBeInTheDocument();
  });

  test("variants test button", () => {
    render(
      <Button variants={[ButtonVariants.outline, ButtonVariants.primary]}>
        test
      </Button>,
    );
    expect(screen.getByTestId("button_test")).toHaveClass("outline primary");
  });
});
