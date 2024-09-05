
export default function Home() {
  return (
    <main className="bg-gray-300 h-screen flex items-center justify-center p-5">
      <div className="bg-white w-full rounded-2xl shadow-md p-5">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-gray-600 font-semibold -mb-1">In transit</span>
          <span className="text-4xl font-semibold ">Coolblue</span>
        </div>
        <div className="size-12 bg-orange-400 rounded-full"></div>
      </div>
      <div className="my-2 flex items-center gap-2">
        <span className="bg-green-400 text-white uppercase px-2 py-1 rounded-full text-xs font-medium hover:bg-green-500">Time</span>
        <span>09:00~12:00</span>
      </div>
      <div className="relative">
        <div className="bg-gray-200 rounded-full h-2 w-full absolute"></div>
        <div className="bg-green-400 rounded-full h-2 w-2/3 absolute top-0 left-0"></div>
      </div>
      <div className="flex justify-between items-center text-gray-600 mt-5">
        <span>Expected</span>
        <span>Sorting Center</span>
        <span>In transit</span>
        <span className="text-gray-400">Delivery</span>
      </div>
      </div>
    </main>
  );
}
