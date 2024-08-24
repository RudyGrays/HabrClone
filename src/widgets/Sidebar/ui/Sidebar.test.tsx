import Sidebar from "./Sidebar";
import { fireEvent, render, screen } from "@testing-library/react";
import SidebarSwitcher from "./SidebarSwitcher/ui/SidebarSwitcher";
import { SidebarProvider } from "app/providers/SidebarProvider/ui/SidebarProvider";
describe("test", () => {
  test("initial test sidebar", () => {
    render(<Sidebar />);
    expect(screen.getByTestId("sidebar_test")).toBeInTheDocument();
  });

  test("open sidebar", () => {
    render(
      <SidebarProvider>
        <Sidebar />
        <SidebarSwitcher />
      </SidebarProvider>,
    );
    const toggleButton = screen.getByTestId("toggle_sidebar");
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar_test")).toHaveClass("open");
  });
});
