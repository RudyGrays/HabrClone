import Sidebar from "./Sidebar";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { fireEvent, screen } from "@testing-library/react";
describe("test", () => {
  test("initial test sidebar", () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId("sidebar_test")).toBeInTheDocument();
  });

  test("open sidebar", () => {
    componentRender(
      <>
        <Sidebar />
      </>,
    );

    const toggleButton = screen.getByTestId("toggle_sidebar");
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar_test")).toHaveClass("open");
    expect(screen.getByTestId("toggle_sidebar")).toBeInTheDocument();
    expect(screen.getByTestId("sidebar_test")).toBeInTheDocument();
  });
});
