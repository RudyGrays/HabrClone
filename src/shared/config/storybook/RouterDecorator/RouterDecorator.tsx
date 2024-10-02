import { StoryFn } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
export const RouterDecorator = (StoryComponent: StoryFn) => {
  return (
    <MemoryRouter>
      <StoryComponent />
    </MemoryRouter>
  );
};
