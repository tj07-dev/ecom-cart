import { Meta, StoryObj } from "@storybook/react";
import Toast from "../components/Toast";

export default {
  title: "Components/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof Toast>;

type Story = StoryObj<typeof Toast>;

export const success: Story = {
  args: {
    open: false,
    children: "Test toasting message!!",
    theme: "success",
  },
};

export const fail: Story = {
  args: {
    open: false,
    children: "Test toasting message!!",
    theme: "fail",
  },
};

export const warn: Story = {
  args: {
    open: false,
    children: "Test toasting message!!",
    theme: "warn",
  },
};

export const info: Story = {
  args: {
    open: false,
    children: "Test toasting message!!",
    theme: "info",
  },
};
