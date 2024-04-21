import React from "react";

function List(props) {
  const {
    value,
    date,
    id,
    onDelete
  }=props
  function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    return date.toLocaleString('en-US', options);
  }
  return (
      <div className="rounded-xl bg-B2 w-full h-32 ">
        <div className="mx-3 my-2 text-gray-200">
          <p>
            {value}
          </p>
        </div>
        <div className="mx-3 text-xs text-gray-300">
          <label htmlFor="date">{formatDate(date)}</label>
        </div>
        <div className=" w-full h-[30px] flex items-center justify-between relative top-9">
          <div className=" w-20 mx-3   h-[80%] rounded-xl">
            {/* <label for="check" className="bg-gray-100 cursor-pointer  w-20 h-14 rounded-full">
              <input type="checkbox" name="" id="check" className="sr-only peer" />
              <span className="w-1/6 h-5/6 bg-rose-300 absolute rounded-full left-4 my-auto top-1 peer-checked:bg-rose-600 peer-checked:left-11 transition-all duration-500"></span>
            </label> */}
             <label class="relative inline-flex cursor-pointer items-center">
    <input id="switch" type="checkbox" class="peer sr-only" />
    <label for="switch" class="hidden"></label>
    <div class="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
  </label>
          </div>
          <div className="flex gap-2 mx-2">
            <span className="text-A2">
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
            </span>
            <span className="text-A1" onClick={()=>onDelete(id)}>
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
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      
  );
}

export default List;
