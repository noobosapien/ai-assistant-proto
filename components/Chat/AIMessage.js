import React from "react";

export default function AIMessage({ content }) {
  return (
    <>
      <div className="w-full p-6 flex items-center justify-between gap-4">
        <span className="bg-sky-500 rounded-xl w-[260px] h-fit text-sky-950 p-6 text-lg">
          {content}
        </span>
        <span className="bg-sky-400 rounded-full w-10 h-10"></span>
      </div>
    </>
  );
}
