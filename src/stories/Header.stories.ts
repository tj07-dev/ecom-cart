import { Meta, StoryObj } from "@storybook/react";
import Header from "../components/Header";

export default {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],

  parameters: { layout: "fullscreen" },
} as Meta<typeof Header>;

type Story = StoryObj<typeof Header>;

export const header: Story = {};
