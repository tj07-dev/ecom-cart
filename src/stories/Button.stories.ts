import { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Button/Button";

const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {},
  parameters: {
    docs: {},
  },
  tags: ["autodocs"],
  // parameters: {
  //   docs: {
  //     page: null,
  //   },
  // },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Button Stories
 */
export const checkOut: Story = {
  args: {
    className: "cart-checkout",
    children: "Check Out",
    myFunction() {},
  },
};
export const remove: Story = {
  args: {
    className: "remove",
    children: "Remove",
    myFunction() {},
  },
};

export const add2cart: Story = {
  args: {
    className: "add2cart",
    children: "Add to Cart",
    myFunction() {},
  },
};

export const increaseQ: Story = {
  args: {
    className: "increaseQ",
    children: "+",
    myFunction() {},
  },
};
export const decreaseQ: Story = {
  args: {
    className: "decreaseQ",
    children: "-",
    myFunction() {},
  },
};
