import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-orange-500 font-bold text-2xl">
          당근마켓
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="/search" className="text-gray-600 hover:text-orange-500">검색</Link></li>
          <li><Link href="/categories" className="text-gray-600 hover:text-orange-500">카테고리</Link></li>
          <li><Link href="/write" className="text-gray-600 hover:text-orange-500">글쓰기</Link></li>
          <li><Link href="/my" className="text-gray-600 hover:text-orange-500">나의 당근</Link></li>
        </ul>
      </div>
    </nav>
  );
}