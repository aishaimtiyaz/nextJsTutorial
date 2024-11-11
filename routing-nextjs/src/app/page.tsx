import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <h3>
        <Link style={{ textDecoration: "none", color:"purple" }} href="/blog">Link to navigate to blog page</Link>
      </h3>
      <h3>
        <Link style={{ textDecoration: "none", color:"purple" }} href="/about">Link to navigate to about page</Link>
      </h3>
      <h3>
        <Link style={{ textDecoration: "none", color:"purple" }} href="/product" replace>Link to navigate to product page</Link>
      </h3>
    </div>
  );
}
