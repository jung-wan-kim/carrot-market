import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const items = [
    { id: 1, title: '아이폰 14 Pro', price: 1000000, location: '서울 강남구', likes: 5, image: 'https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UY436_FMwebp_QL65_.jpg' },
    { id: 2, title: '맥북 프로 M1', price: 1500000, location: '서울 마포구', likes: 3, image: 'https://m.media-amazon.com/images/I/61aUBxqc5PL._AC_UY436_FMwebp_QL65_.jpg' },
    { id: 3, title: '에어팟 프로', price: 200000, location: '서울 송파구', likes: 7, image: 'https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY436_FMwebp_QL65_.jpg' },
    { id: 4, title: '갤럭시 S21', price: 800000, location: '부산 해운대구', likes: 4, image: 'https://m.media-amazon.com/images/I/61jYjeuNUnL._AC_UY436_FMwebp_QL65_.jpg' },
    { id: 5, title: '아이패드 에어', price: 700000, location: '인천 연수구', likes: 6, image: 'https://m.media-amazon.com/images/I/61XZQXFQeVL._AC_UY436_FMwebp_QL65_.jpg' },
    { id: 6, title: '닌텐도 스위치', price: 300000, location: '대구 수성구', likes: 8, image: 'https://m.media-amazon.com/images/I/61-PblYntsL._AC_UY436_FMwebp_QL65_.jpg' },
    { id: 7, title: 'LG 그램', price: 1200000, location: '광주 서구', likes: 2, image: 'https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY436_FMwebp_QL65_.jpg' },
    { id: 8, title: '소니 WH-1000XM4', price: 280000, location: '대전 유성구', likes: 5, image: 'https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_UY436_FMwebp_QL65_.jpg' },
    { id: 9, title: '캐논 DSLR', price: 500000, location: '울산 남구', likes: 3, image: 'https://m.media-amazon.com/images/I/71EWRyqzw0L._AC_UY436_FMwebp_QL65_.jpg' },
    { id: 10, title: '삼성 QLED TV', price: 1300000, location: '세종시', likes: 7, image: 'https://m.media-amazon.com/images/I/71LJJrKbezL._AC_UY436_FMwebp_QL65_.jpg' },
    { id: 11, title: '필립스 면도기', price: 150000, location: '강원 춘천시', likes: 4, image: 'https://m.media-amazon.com/images/I/71QMkXmLVCL._AC_UY436_FMwebp_QL65_.jpg' },
    { id: 12, title: '애플 워치', price: 350000, location: '충북 청주시', likes: 5, image: 'https://m.media-amazon.com/images/I/71XMTLtZd5L._AC_UY436_FMwebp_QL65_.jpg' },
  ];

  return (
    <main className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">중고거래 인기매물</h1>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {items.map((item) => (
            <Link href={`/detail/${item.id}`} key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-40">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={160}
                  layout="responsive"
                />
              </div>
              <div className="p-4">
                <h2 className="font-semibold text-lg mb-1">{item.title}</h2>
                <p className="text-orange-500 font-medium">{item.price.toLocaleString()}원</p>
                <p className="text-gray-500 text-sm">{item.location}</p>
                <p className="text-gray-400 text-sm mt-2">관심 {item.likes}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
