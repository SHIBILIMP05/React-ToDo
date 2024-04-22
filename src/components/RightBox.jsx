import React from "react";
import List from "./List";
import { toast } from "sonner";
function RightBox({
  data,
  listData,
  edit,
  setList,
  setData,
  list,
  index,
  setEdit,
  setIndex,
}) {
  const handleList = () => {
    const exist = list.filter((val) => val.value === data);
    if (!data.trim()) {
      toast.error("Input field cannot be empty or don't start with space");
      return;
    }
    if (exist.length !== 0) {
      toast.warning("Task already exists");
      return;
    }
    setList([
      ...list,
      { id: Date.now(), value: data, date: new Date(), isComplete: false },
    ]);
    console.log(list);
    setData("");
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
  const onDelete = (id) => {
    const newList = list.filter((data) => data.id !== id);
    toast.success("Task is Deleted");
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
  return (
    <div className="rounded-3xl bg-C2 w-[75%] h-full">
      <div className="text-C5 px-7 py-6 text-lg">
        <span>Count ( {listData.length} )</span>
      </div>
      <form>
        <div className="flex w-[85%] h-10 mx-8 ">
          <input
            //   onChange={handleData}
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
  );
}

export default RightBox;
