import Image from 'next/image'
import Link from 'next/link';
import ProductCard from './components/ProductCard/ProductCard';
import FAQCard from './components/FAQCard/FAQCard';

export default function Home() {
  return (
    <main>
      <h1>Hello, world!</h1>
      <Link href="/users">Users</Link>
      <ProductCard></ProductCard>
      <FAQCard></FAQCard>
    </main>
  )
}
