import React from "react";
import AIMessage from "./AIMessage";
import UserMessage from "./UserMessage";

export default function Chat() {
  return (
    <>
      <div className="flex flex-col justify-end w-full h-full mb-6">
        <div className="flex flex-col items-center justify-evenly gap-y-4 px-6">
          <div>
            {/* Messages */}
            <AIMessage />
            <UserMessage />
          </div>
          <textarea className="rounded-xl w-full bg-sky-100 text-lg text-sky-950 px-6 py-2" />
          <span className="px-6 py-2 rounded-xl bg-sky-200 text-sky-900 hover:opacity-70 cursor-pointer w-full text-center text-lg font-semibold">
            Send
          </span>
        </div>
      </div>
    </>
  );
}
