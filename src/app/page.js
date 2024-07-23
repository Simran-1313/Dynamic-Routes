import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
<div className="text-3xl w-[100vw] mx-auto">
  <h2>Go to Product Page </h2>
  <p className="text-sm mt-5 mb-2">Click on products</p>
  <Link href='/products'>Products </Link>
</div>
  );
}
