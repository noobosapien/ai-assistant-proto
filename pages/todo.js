import Layout from "@/components/Layout";
import React from "react";

export default function Todo() {
  return (
    <>
      <Layout>
        <div className="w-full h-full p-6 flex flex-col flex-wrap gap-4">
          <div className="flex justify-center gap-4">
            <span className="py-2 px-4 rounded-xl bg-sky-300 text-sky-900 text-center cursor-pointer hover:opacity-70">
              Today
            </span>

            <span className="py-2 px-4 rounded-xl bg-sky-400 text-sky-900 text-center cursor-pointer hover:opacity-70">
              This Week
            </span>
          </div>
        </div>
      </Layout>
    </>
  );
}
