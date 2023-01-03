import { Meta, StoryObj } from "@storybook/react";
import CartItem from "../components/CartItem";

const meta = {
  title: "Components/Cart Item",
  component: CartItem,
  argTypes: {},
  tags: ["autodocs"],
  parameters: {
    quantity: 8,
    docs: {},
  },
} satisfies Meta<typeof CartItem>;
export default meta;
type Story = StoryObj<typeof meta>;

export const card1: Story = {
  args: {
    id: 3,
    quantity: 3,
  },
};
export const card2: Story = {
  args: {
    id: 1,
    quantity: 4,
  },
};
