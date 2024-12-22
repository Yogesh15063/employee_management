import React from "react";

const CreateTask = () => {
  return (
    <div className="mt-10 p-4 bg-slate-700 rounded-md">
      <form className="flex flex-wrap w-full item-start justify-between">
        <div className="w-1/2">
          <div>
            <h2>Task Title</h2>
            <input
              type="text"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2 border-white mb-4"
            />
          </div>
          <div>
            <h2>Date</h2>
            <input type="date"  className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2 border-white mb-4" />
          </div>
          <div>
            <h2>Assigned To</h2>
            <input type="text"  className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2 border-white mb-4"/>
          </div>
          <div>
            <h2>Category</h2>
            <input type="text"  className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2 border-white mb-4"/>
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h2 className="text-sm mb-0.5">Descrption</h2>
          <textarea className="w-full h-44 text-sm px-2 py-4 rounded outline-none bg-transparent border-2 border-white"></textarea>
          <button className="bg-slate-400 hover:bg-slate-100 text-black py-4 px-3 mt-4 w-full rounded">Create Task</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
