import Image from 'next/image';

export default function DetailPage({ params }: { params: { id: string } }) {
  // 실제로는 이 ID를 사용하여 데이터를 가져와야 합니다.
  const item = {
    id: params.id,
    title: '아이폰 14 Pro',
    price: 1000000,
    description: '1년 사용한 아이폰 14 Pro 판매합니다. 상태 좋습니다.',
    seller: '당근이',
    location: '서울 강남구',
    createdAt: '3일 전',
    views: 128,
    likes: 8,
  };

  return (
    <main className="bg-gray-100 min-h-screen pb-16">
      <div className="bg-white">
        <div className="relative h-96">
          <Image
            src="https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UF1000,1000_QL80_.jpg"
            alt={item.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
          <div>
            <p className="font-medium">{item.seller}</p>
            <p className="text-sm text-gray-500">{item.location}</p>
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-2">{item.title}</h1>
        <p className="text-gray-500 text-sm mb-4">{item.createdAt}</p>
        <p className="text-2xl font-bold text-carrot-orange mb-4">{item.price.toLocaleString()}원</p>
        <p className="text-gray-700 mb-4">{item.description}</p>
        <p className="text-sm text-gray-500 mb-8">조회 {item.views} · 관심 {item.likes}</p>
        <div className="flex space-x-2">
          <button className="flex-1 bg-carrot-orange text-white py-3 rounded-lg font-medium hover:bg-orange-600">
            채팅하기
          </button>
          <button className="w-12 h-12 bg-gray-100 text-gray-500 rounded-lg flex items-center justify-center hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
}