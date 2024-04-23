import React, { useEffect, useState } from "react";
import LeftBox from "./LeftBox";
import RightBox from "./RightBox";
function MainBox() {
  const [data, setData] = useState("");
  const [list, setList] = useState([]);
  const [select, setSelect] = useState("All");
  const [listData, setListData] = useState([]);
  const [edit, setEdit] = useState("");
  const [index, setIndex] = useState("");

  useEffect(() => {
    if (select === "All") {
      console.log("worked");
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
          <LeftBox select={select} setSelect={setSelect} />
          <RightBox
            data={data}
            listData={listData}
            edit={edit}
            setList={setList}
            setData={setData}
            list={list}
            index={index}
            setEdit={setEdit}
            setIndex={setIndex}
          />
        </div>
      </div>
    </div>
  );
}

export default MainBox;
