import Link from "next/link"
export default function Home() {
  return <div>
    <ul>
      <li><Link href="/state">state</Link></li>
      <li><Link href="/effect">effect</Link></li>
      <li><Link href="/context">context</Link></li>
      <li><Link href="/reducer">reducer</Link></li>
    </ul>
  </div>;
}
