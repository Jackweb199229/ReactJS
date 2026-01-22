import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const [task, setTask] = useState([]);
  const copyTask = [...task];

  const formSubmit = (e) => {
    e.preventDefault();

    setTitle("");
    setDetail("");
    console.log(task);

    copyTask.push({ title, detail });
    setTask(copyTask);
  };

  const deletNote = (idx)=>{
      const copyTask = [...task];
      copyTask.splice(idx, 1);
      setTask(copyTask);
  }

  return (
    <div className="app text-white ">
      <form
        onSubmit={(e) => {
          formSubmit(e);
        }}
        className="md:flex md:justify-between p-10 "
      >
        <div className="flex flex-col gap-5 p-10 md:w-1/2">
          <h1 className="text-2xl font-bold">Add Notes </h1>

          <input
            type="text"
            placeholder="Enter Notes Heading"
            className="px-5  py-5 font-medium border-2 outline-none rounded "
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          {/* 2nd input for detailed  */}

          <textarea
            type="text"
            placeholder="Write Details"
            className="px-5 h-32 font-medium py-5 border-2 outline-none rounded "
            value={detail}
            onChange={(e) => {
              setDetail(e.target.value);
            }}
          />
          <button
            className="bg-white text-black h-10 outline-none px-5 py-2 
          rounded active:scale-95"
          >
            Submit
          </button>
        </div>

        <div className="md:w-1/2 px-5 lg:border-l-3">
          <h2 className="pb-5 text-2xl">Your Recent Notes</h2>
          <div className="flex flex-wrap gap-5 ">
            {task.map(function (elem, idx) {
              return (
                <div
                  key={idx}
                  className=" relative box w-40 h-45 rounded  text-black
                 bg-[url('https://gallery.yopriceville.com/downloadfullsize/send/14426')] bg-cover"
                >
                <i
                    onClick={()=>{
                      deletNote(idx)
                    }}
                    class="absolute top-0 right-1 ri-chat-delete-fill text-white"
                ></i>

                  <h3 className="text-center mt-9 leading-tight font-bold text-xl">
                    {" "}
                    {elem.title}{" "}
                  </h3>
                  <p className="text-center mt-2 p-2 border-t-2 text-gray-600">
                    {" "}
                    {elem.detail}{" "}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
