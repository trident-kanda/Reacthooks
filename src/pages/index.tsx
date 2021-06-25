import Link from "next/link";
export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/state">state</Link>
        </li>
        <li>
          <Link href="/effect">effect</Link>
        </li>
        <li>
          <Link href="/context">context</Link>
        </li>
        <li>
          <Link href="/reducer">reducer</Link>
        </li>
        <li>
          <Link href="/callback">callback</Link>
        </li>
        <li>
          <Link href="/memo">memo</Link>
        </li>
        <li>
          <Link href="/ref">ref</Link>
        </li>
      </ul>
    </div>
  );
}
