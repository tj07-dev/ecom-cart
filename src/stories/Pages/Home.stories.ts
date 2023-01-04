import { Meta, StoryObj } from "@storybook/react";
import { Home } from "../../pages/Home";

const meta = {
  title: "Page/Home",
  component: Home,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Home>;
export default meta;
type Story = StoryObj<typeof meta>;
export const home: Story = {};
