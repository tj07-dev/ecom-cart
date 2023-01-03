import { Meta, StoryObj } from "@storybook/react";
import { ViewCart } from "../../pages/ViewCart";

const meta = {
  title: "Page/ViewCart",
  component: ViewCart,
  decorators: [],
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ViewCart>;
export default meta;
type Story = StoryObj<typeof meta>;
export const viewCart: Story = {};
