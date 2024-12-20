import React from "react";

const TaskListNumber = () => {
  return (
    <>
      <div className="flex justify-between  mt-10 gap-2">
        <div className="w-[45%] text-black rounded-md bg-slate-50 p-10">
          <h2 className=" text-3xl font-bold">0</h2>
          <h3 className="text-xl font-semibold">Tasks</h3>
        </div>
        <div className="w-[45%] text-black rounded-md bg-slate-100 p-10">
          <h2 className=" text-3xl font-bold">0</h2>
          <h3 className="text-xl font-semibold">Tasks</h3>
        </div>
        <div className="w-[45%] text-black rounded-md bg-slate-200 p-10">
          <h2 className=" text-3xl font-bold">0</h2>
          <h3 className="text-xl font-semibold">Tasks</h3>
        </div>
        <div className="w-[45%] text-black rounded-md bg-slate-300 p-10">
          <h2 className=" text-3xl font-bold">0</h2>
          <h3 className="text-xl font-semibold">Tasks</h3>
        </div>
      </div>
    </>
  );
};

export default TaskListNumber;
