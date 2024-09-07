import Image from 'next/image';

export default function DetailPage() {
  return (
    <main className="bg-netflix-black min-h-screen text-white">
      <div className="relative h-[56.25vw]">
        <Image
          src="https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg"
          alt="탑건: 매버릭 포스터"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-netflix-black to-transparent" />
        <div className="absolute bottom-1/4 left-10">
          <h1 className="text-5xl font-bold mb-4">탑건: 매버릭</h1>
          <div className="flex space-x-4 mb-4">
            <button className="bg-white text-black py-2 px-8 rounded font-bold hover:bg-opacity-80">
              ▶ 재생
            </button>
            <button className="bg-gray-500 bg-opacity-50 py-2 px-8 rounded font-bold hover:bg-opacity-40">
              + 내가 찜한 콘텐츠
            </button>
          </div>
        </div>
      </div>
      
      <div className="p-10 -mt-20">
        <div className="flex space-x-4 mb-4">
          <span className="text-green-500 font-bold">98% 일치</span>
          <span>2023</span>
          <span>시즌 1개</span>
          <span>HD</span>
        </div>
        
        <p className="text-lg mb-6">
          영화에 대한 간단한 설명이 여기에 들어갑니다. 이 영화의 줄거리와 주요 특징을 소개합니다.
        </p>
        
        <div>
          <span className="text-gray-400">출연:</span> 배우1, 배우2, 배우3
        </div>
        <div>
          <span className="text-gray-400">장르:</span> 액션, 모험, SF
        </div>
      </div>
    </main>
  );
}