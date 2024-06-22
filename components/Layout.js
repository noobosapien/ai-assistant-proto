import Link from "next/link";
import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <main className="flex justify-center items-center">
        <div className="flex flex-col justify-end w-[360px] h-[100vh] bg-zinc-700">
          {children}
          <footer className="bg-zinc-800 py-6 rounded-t-full">
            <div className="flex justify-evenly">
              <Link
                href={"/"}
                className="text-white px-6 py-2 rounded-lg bg-sky-600 hover:opacity-70 cursor-pointer"
              >
                Chat
              </Link>
              <Link
                href={"/todo"}
                className="text-white px-6 py-2 rounded-lg bg-sky-600 hover:opacity-70 cursor-pointer"
              >
                Todo
              </Link>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
