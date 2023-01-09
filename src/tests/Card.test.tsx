import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Card from "../components/Card/Card";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";

describe("Card renders correctly", () => {
  test("Card renders without crashing", () => {
    const data = {
      id: 1,
      name: "MSI GF63 ",
      stock: 10,
      img: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 399.99,
      description:
        "Display: 15.6 Fhd (1920 1080), IPS-Level 60Hz 45 percent ntsc thin Bezel 1920 1080 16: 9Graphics: NVIDIA GeForce GTX1650 [Max-Q 4G GDDR5 Processor: Intel Core i5-9300h 2.4 - 4.1GHz Memory: 8GB (8G 1) DDR4 2666MHz 2 Sockets Max Memory 64GB Storage: 256GB NVMe SSD.",
    }
    render(
      <ShoppingCartProvider>
        <Card id={data.id} img={data.img} name={data.name} price={data.price} description={data.description} stock={data.stock}></Card>
      </ShoppingCartProvider>,
    );
    expect(screen).toMatchSnapshot();
  });
  // test('renders ', () => {
  //   render(<ShoppingCartProvider>
  //     <Card id={0} img={""} name={""} price={0} description={""} stock={0}></Card>
  //   </ShoppingCartProvider>,);
  //   const element= screen.getBy('div')
  //   expect(element).toBeInTheDocument();
  // });
});
