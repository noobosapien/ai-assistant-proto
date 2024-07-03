import React, { useEffect, useState } from "react";
import AIMessage from "./AIMessage";
import UserMessage from "./UserMessage";
import sendMessage from "@/utils/sendMessage";

export default function Chat() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([
    { profile: "AI", content: "Hi Allen, How can I help you today?" },
  ]);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (e) => {
    if (query != "") {
      setLoading(true);
      const result = await sendMessage(query);
      if (result) {
        setLoading(false);
        const entry = { profile: "AI", content: result.content };
        setMessages([...messages, { profile: "USER", content: query }, entry]);
        setQuery("");
      }
    }
  };

  return (
    <>
      <div className="flex flex-col justify-end w-full h-full mb-6">
        <div className="flex flex-col items-center justify-evenly gap-y-4 px-6">
          <div>
            {/* Messages */}
            {messages &&
              messages instanceof Array &&
              messages.map((message) => (
                <>
                  {message.profile == "AI" && message.content != "" ? (
                    <AIMessage content={message.content} />
                  ) : (
                    <UserMessage content={message.content} />
                  )}
                </>
              ))}
          </div>
          <textarea
            className="rounded-xl w-full bg-sky-100 text-lg text-sky-950 px-6 py-2"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            disabled={loading}
            onClick={handleSendMessage}
            className="px-6 py-2 rounded-xl bg-sky-200 text-sky-900 hover:opacity-70 cursor-pointer w-full text-center text-lg font-semibold disabled:bg-gray-200 disabled:hover:opacity-100"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}
