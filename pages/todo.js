import Layout from "@/components/Layout";
import TaskCard from "@/components/Task/TaskCard";
import getTasks from "@/utils/getTasks";
import React, { useEffect, useState } from "react";

export default function Todo() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const allTasks = async () => {
      const t = await getTasks();
      setTasks(t);
    };

    allTasks();
  }, []);

  return (
    <>
      <Layout>
        <div className="w-full h-full p-6 flex flex-col items-center flex-wrap gap-4">
          {tasks &&
            tasks instanceof Array &&
            tasks.map((task, i) => (
              <>
                <TaskCard
                  key={`task_${i}`}
                  name={task.name}
                  description={task.description}
                  severity={task.severity}
                  time={task.time}
                />
              </>
            ))}
        </div>
      </Layout>
    </>
  );
}
