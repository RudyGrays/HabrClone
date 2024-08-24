import { render, screen } from "@testing-library/react";
import { Header } from "widgets/Header";
import { MemoryRouter } from "react-router-dom";

describe("Header", () => {
  test("initial test", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByTestId("header_test")).toBeInTheDocument();
  });
});
