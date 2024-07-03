import React from "react";

export default function TaskCard({ name, severity, time, description }) {
  return (
    <>
      <div
        className={`w-[280px] h-fit rounded-lg ${
          severity == "high"
            ? "bg-red-200"
            : severity == "medium"
            ? "bg-orange-200"
            : "bg-blue-200"
        } flex flex-col gap-4 text-stone-600 p-3`}
      >
        <div className="flex justify-between">
          <span className="font-bold">{name}</span>
          <span>Severity: {severity}</span>
        </div>

        <span className="font-semibold">Date/Time:- {time}</span>

        <span>{description}</span>
      </div>
    </>
  );
}
