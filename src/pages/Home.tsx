import products from "../data/product.json";
import Card from "../components/Card/Card";
import '../styles/index.scss'

export function Home() {
  return (
    <>
      <div className="product-list">
        {products.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}
