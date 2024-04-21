import { useState } from "react";
import "./App.css";
import List from "./List";

function App() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-B3">
      <div className="font-Lexend container p-5 rounded-2xl min-h-[750px] w-[1600px] justify-center content-center bg-B2">
        <div className="  text-white w-5/6 mx-auto relative bottom-5 text-6xl ">
          ToDo
        </div>
        <div className=" w-5/6 flex gap-6 h-[600px] mx-auto">
          <div className="rounded-3xl bg-B1 w-[25%] h-full">
            <div className="relative left-8 top-7 text-white text-xl font-google1 font-semibold flex items-center">
              <span>Filters</span>
              <span className="mx-36">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                  />
                </svg>
              </span>
            </div>
            <div className="p-3 relative top-8 left-6">
              <div className=" text-white bg-B2 w-[225px] h-[33px] mt-3 rounded-md flex items-center pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
                  />
                </svg>
                <span className="mx-2">All</span>
              </div>
              <div className=" text-white bg-B2 w-[225px] h-[33px] mt-3 rounded-md flex items-center pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                  />
                </svg>

                <span className="mx-2">Pending</span>
              </div>
              <div className=" text-white bg-B2 w-[225px] h-[33px] mt-3 rounded-md flex items-center pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
                  />
                </svg>

                <span className="mx-2">Completed</span>
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-B1 w-[75%] h-full">
            <div className="text-white px-7 py-6 text-lg">
              <span>Count ( 6 )</span>
            </div>
            <div className="flex w-[85%] h-10 mx-8 ">
              <input
                className="rounded-lg h-full w-full  "
                type="text"
                name="text"
                id=""
              />
              <div className="mx-5 rounded-lg w-32 h-10 bg-slate-500">
                <button className="h-full w-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span className="mx-2">Add</span>
                </button>
              </div>
            </div>
            <List />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
