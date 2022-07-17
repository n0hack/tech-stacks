import type { NextPage } from "next";

const Page: NextPage = () => {
  // Tailwind는 JIT(Just In Time) 컴파일로 동작함 (3.0v부터 도입) _컴파일러가 변경 사항을 추적해 클래스를 만들어 줌
  // 이전에는 배포 전에 사용하지 않는 클래스명들을 일괄로 제거해주는 작업(Purging)을 거쳤어야 함. 하나의 거대한 CSS 파일이었음
  // Tailwind는 모바일 퍼스트를 기본으로 적용
  return (
    <div className="bg-slate-400 py-20 px-10 grid gap-10 min-h-screen lg:grid-cols-2 xl:grid-cols-3 xl:place-items-center">
      <div className="bg-white p-6 rounded-3xl shadow-xl dark:bg-black">
        <span className="font-semibold text-3xl dark:text-white">Select Item</span>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex justify-between my-2 only:bg-blue-50">
              <span className="text-gray-500 dark:text-gray-100">Grey Chair</span>
              <span className="font-semibold dark:text-white">$19</span>
            </div>
          ))}
        </ul>
        <ul>
          {["a", "b", "c", ""].map((c, i) => (
            <li key={i} className="bg-red-500 py-2 empty:hidden">
              {c}
            </li>
          ))}
        </ul>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$99</span>
        </div>
        {/* Modifier */}
        <button className="block mt-5 bg-blue-500 text-white text-center p-3 rounded-xl w-4/5 mx-auto hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:bg-red-500">
          Checkout
        </button>
      </div>

      <div className="bg-white overflow-hidden rounded-3xl shadow-xl group ">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-5">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-zinc-300 rounded-full group-hover:bg-red-300 transition-colors" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$2,310</span>
            </div>
          </div>
          <div className="relative flex flex-col items-center -mt-10 -mb-5">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">New York, USA</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-10 rounded-3xl shadow-xl lg:col-span-2 xl:col-span-1">
        <div className="flex mb-5 justify-between items-center">
          <span>⬅️</span>
          <div className="space-x-3">
            <span>⭐️ 4.9</span>
            <span className="shadow-xl p-2 rounded-md">💖</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-medium text-lg">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500  focus:ring-2 ring-offset-2 ring-yellow-500 transition " />
              <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition" />
              <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition" />
            </div>
            <div className="flex items-center space-x-5">
              <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">-</button>
              <span>1</span>
              <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">+</button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-2xl">$450</span>
            <button className="bg-blue-500 text-center text-xs text-white rounded-xl py-4 px-8">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
