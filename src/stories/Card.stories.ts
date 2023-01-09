import { Meta, StoryObj } from "@storybook/react";
import Card from "../components/Card/Card";

const meta = {
  title: "Components/Product Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    quantity: 8,
    docs: {},
  },
} satisfies Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof meta>;

export const card: Story = {
  args: {
    id: 1,
    name: "MSI GF63 ",
    stock: 10,
    img: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 399.99,
    description:
      "Display: 15.6 Fhd (1920 1080), IPS-Level 60Hz 45 percent ntsc thin Bezel 1920 1080 16: 9Graphics: NVIDIA GeForce GTX1650 [Max-Q 4G GDDR5 Processor: Intel Core i5-9300h 2.4 - 4.1GHz Memory: 8GB (8G 1) DDR4 2666MHz 2 Sockets Max Memory 64GB Storage: 256GB NVMe SSD.",
  },
};
