import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="grid min-h-screen gap-10 bg-slate-400 py-20 px-20 lg:grid-cols-2 xl:grid-cols-3 xl:place-content-center">
      <div className="flex flex-col dark justify-between rounded-3xl bg-white p-6 shadow-xl sm:bg-red-400 md:bg-teal-400 lg:col-span-2 lg:bg-indigo-400 xl:col-span-1 xl:bg-yellow-400 2xl:bg-pink-400">
        <span className="text-3xl font-semibold dark:text-white">Select Item</span>
        <ul>
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="my-2 flex justify-between first:bg-teal-50 last:bg-amber-50 odd:bg-blue-50 even:bg-yellow-50"
            >
              <span className="text-gray-500 dark:text-gray-100">Grey Chair</span>
              <span className="font-semibold dark:text-white">$19</span>
            </div>
          ))}
        </ul>
        <div className="mt-2 flex justify-between border-t-2 border-dashed pt-2">
          <span>Total</span>
          <span className="font-semibold dark:text-white">$10</span>
        </div>
        <button className="mx-auto mt-5 flex w-2/4 items-center justify-center rounded-xl bg-blue-500 p-3 text-white hover:bg-teal-500 hover:text-black focus:text-red-500 active:bg-yellow-500">
          Checkout
        </button>
      </div>
      <div className="group overflow-hidden rounded-3xl bg-white shadow-xl">
        <div className="bg-blue-500 p-6 pb-14 xl:pb-32 portrait:bg-indigo-500 landscape:bg-teal-500">
          <span className="text-2xl text-white">Profile</span>
        </div>
        <div className="relative -top-5 rounded-3xl bg-white p-6">
          <div className="relative -top-16 flex items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 rounded-full bg-zinc-300 transition-colors group-hover:bg-red-300" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$2,310</span>
            </div>
          </div>
          <div className="relative -mt-10 -mb-5 flex flex-col items-center">
            <span className="text-lg font-medium">Tony Molly</span>
            <span className="text-sm text-gray-500">New York, USA</span>
          </div>
        </div>
      </div>
      <div className="rounded-2xl bg-white p-10 shadow-xl">
        <div className="mb-5 flex items-center justify-between">
          <span>⬅️</span>
          <div className="space-x-3">
            <span>⭐️ 4.9</span>
            <span className="rounded-md p-2 shadow-xl">💖</span>
          </div>
        </div>
        <div className="mb-5 h-72 bg-zinc-400" />
        <div>
          <div className="flex flex-col">
            <span className="mb-1.5 font-medium">Swoon Lounge</span>
            <span className="text-xs text-gray-500">Chair</span>
            <div className="mt-3 mb-5 flex items-center justify-between">
              <div className="space-x-2">
                <button className="h-5 w-5 rounded-full bg-yellow-500 ring-yellow-500 ring-offset-2 transition-all focus:ring-2" />
                <button className="h-5 w-5 rounded-full bg-indigo-500 ring-indigo-500 ring-offset-2 transition-all focus:ring-2" />
                <button className="h-5 w-5 rounded-full bg-teal-500 ring-teal-500 ring-offset-2 transition-all focus:ring-2" />
              </div>
              <div className="flex items-center space-x-5">
                <button className="flex aspect-square w-8 items-center justify-center rounded-lg bg-blue-200  text-xl text-gray-500">
                  -
                </button>
                <span>1</span>
                <button className="flex aspect-square w-8 items-center justify-center rounded-lg bg-blue-200  text-xl text-gray-500">
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-medium">$450</span>
            <button className="rounded-lg bg-blue-500 py-2 px-5 text-center text-white">
              Add to card
            </button>
          </div>
        </div>
      </div>
      <form className="flex flex-col space-y-2 p-5">
        <input
          type="text"
          required
          placeholder="Username"
          className="peer rounded border border-gray-400 p-1"
        />
        <span className="hidden peer-invalid:block peer-invalid:text-red-500">
          This input is invalid
        </span>
        <span className="hidden peer-valid:block peer-valid:text-teal-500">
          Awesome Username
        </span>
        <input type="submit" value="Login" className="bg-white" />
        <button />
      </form>
      <details className="select-none open:bg-indigo-400 open:text-white">
        <summary className="cursor-pointer">What is my fav. food.</summary>
        <span>김치</span>
      </details>
      <ul className="list-decimal marker:text-teal-500">
        <li>hi</li>
        <li>hi</li>
        <li>hi</li>
      </ul>
      <input
        type="file"
        className="file:cursor-pointer file:rounded-xl file:border-0 file:bg-purple-400 file:px-5 file:text-white file:transition-colors file:hover:bg-white file:hover:text-purple-400"
      />
    </div>
  );
};

export default Home;
