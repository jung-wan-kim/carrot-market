
export default function Home() {
  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center p-5">
      <div className="bg-white w-full max-w-screen-sm rounded-3xl shadow-md p-5">
        <input type="text" placeholder="Search" className="w-full p-2 rounded-full bg-gray-200 text-gray-800 active:scale-90 h-10 pl-5"/>
        <button className="bg-black text-white p-2 rounded-full h-10 w-full mt-2">검색</button>
        </div>
    </main>
  );
}
