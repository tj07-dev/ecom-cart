import products from "../data/product.json";
import Card from "../components/Card";

export function Home() {
  return (
    <>
      <div className="product-list">
        {/* {products.map((item) => (
                    <p key={item.id}>{JSON.stringify(item)}</p>
                ))} */}
        {products.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}
