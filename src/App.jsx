import { useEffect, useState } from "react";
import "./App.css";
import List from "./List";
import { toast } from "sonner";

function App() {
  const [data, setData] = useState("");
  const [list, setList] = useState([]);
  const [select, setSelect] = useState("All");
  const [listData, setListData] = useState([]);
  const [edit, setEdit] = useState("");
  const [index, setIndex] = useState("");

  const handleList = () => {
    const exist = list.filter((val) => val.value === data);
    if (!data.trim()) {pt-10
    }
    setList([
      { id: Date.now(), value: data, date: new Date(), isComplete: false },
      ...list,
    ]);
    setData("");
  };
  const onDelete = (id) => {
    const newList = list.filter((data) => data.id !== id);
    toast.success("Task is Deleted")
    setList(newList);
  };
  const taskHandle = (evnt, index) => {
    const value = evnt.target.checked;
    list[index].isComplete = value;
    setList([...list]);
  };
  const onEdit = (index) => {
    setEdit(list[index]);
    setData(list[index].value);
    setIndex(index);
  };
  const handleEdit = () => {
    const exist = list.filter((val) => val.value === data);
    if (!data.trim()) {
      toast.error("Input field cannot be empty or don't start with space");
      return;
    }
    if (exist.length !== 0) {
      toast.warning("Task already exists");
      return;
    }
    list[index].value = data;
    setData("");
    setEdit("");
  };
  useEffect(() => {
    if (select === "All") {
      console.log(listData);
      setListData(list);
    } else if (select === "Pending") {
      const filter = list.filter((data) => data.isComplete !== true);
      setListData(filter);
    } else if (select === "Completed") {
      const filter = list.filter((data) => data.isComplete !== false);
      setListData(filter);
    }
  }, [select, list]);
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-br from-purple-600 to-black">
      <div className="font-Lexend container p-5 rounded-2xl min-h-[750px] w-[1600px] justify-center content-center backdrop-blur-sm bg-opacity-20 bg-C6">
        <div className="  text-white w-5/6 mx-auto relative bottom-5 text-6xl ">
          To<span className="">Do</span>
        </div>
        <div className=" w-5/6 flex gap-6 h-[600px] mx-auto">
          <div className="rounded-3xl bg-C2 w-[25%] h-full">
            <div className="relative left-8 top-7 text-C5 text-xl font-google1 font-semibold flex items-center">
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
            <div className="text-C4 p-3 relative top-8 left-6">
              <div
                onClick={() => {
                  setSelect("All");
                }}
                className={` ${select == "All" && "bg-B2"} cursor-pointer w-[225px] h-[33px] mt-3 rounded-md flex items-center pl-3`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"pt-10
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
              <div
                onClick={() => setSelect("Pending")}
                className={`  ${select == "Pending" && "bg-B2"} cursor-pointer w-[225px] h-[33px] mt-3 rounded-md flex items-center pl-3`}
              >
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
              <div
                onClick={() => setSelect("Completed")}
                className={` ${select == "Completed" && "bg-B2"} cursor-pointer w-[225px] h-[33px] mt-3 rounded-md flex items-center pl-3`}
              >
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
          <div className="rounded-3xl bg-C2 w-[75%] h-full">
            <div className="text-C5 px-7 py-6 text-lg">
              <span>Count ( {listData.length} )</span>
            </div>
            <form>
              <div className="flex w-[85%] h-10 mx-8 ">
                <input
                  // onChange={handleData}
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                  className="rounded-lg h-full w-full "
                  type="text"
                  name="text"
                />
                {edit ? (
                  <div className="mx-5 rounded-lg w-32 h-10 bg-C5">
                    <button
                      onClick={handleEdit}
                      type="button"
                      className="h-full w-full flex items-center justify-center "
                    >
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
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>

                      <span className="mx-2">Edit</span>
                    </button>
                  </div>
                ) : (
                  <div className="mx-5 rounded-lg w-32 h-10 bg-C1">
                    <button
                      onClick={handleList}
                      type="button"
                      className="h-full w-full flex items-center justify-center "
                    >
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
                )}
              </div>
            </form>
            <div className=" overflow-y-scroll grid grid-cols-3 gap-x-3 gap-y-3 w-[90%] h-[70%] m-10">
              {listData.map((data, index) => {
                return (
                  <List
                    key={data.id}
                    index={index}
                    onDelete={onDelete}
                    taskHandle={taskHandle}
                    value={data.value}
                    id={data.id}
                    date={data.date}
                    isComplete={data.isComplete}
                    onEdit={onEdit}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
