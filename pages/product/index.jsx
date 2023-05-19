import Link from "next/link";

function ProductList({ productID = 100 }) {
  return (
    <div>
      <Link href="/product/1">
        <h1>product 1</h1>
      </Link>

      <Link href="/product/2">
        <h1>product 2</h1>
      </Link>
      <Link href="/product/3" replace>
        <h1>product 3</h1>
      </Link>
      <Link href={`/product/${productID}`}>
        <h1>product 100</h1>
      </Link>
    </div>
  );
}

export default ProductList;
