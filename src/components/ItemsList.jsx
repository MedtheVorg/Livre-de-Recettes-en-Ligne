import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const ItemsList = ({ itemsList, setItemsList, label, placeholder }) => {
  const [listItem, setListItem] = useState("");

  function appendItem(e) {
    e.preventDefault();

    setItemsList((prev) => [...prev, listItem]);
    setListItem("");
  }

  function updateInput(e) {
    setListItem(e.target.value);
  }

  function deleteItem(targetItem) {
    setItemsList((prev) => {
      const newList = prev.filter((item) => item != targetItem);
      return newList;
    });
  }

  return (
    <>
      {/* items List */}
      <hr className="w-1/2 mx-auto my-4" />
      <form className="flex flex-col gap-y-4" onSubmit={appendItem}>
        <label className="capitalize text-xl font-semibold">{label} :</label>
        <div className="flex  ">
          <input
            type="text"
            className="bg-customLightGray p-4  transition-all duration-200 ease-in-out  border-2 border-transparent   focus-within:border-customBorderColor placeholder:text-customBlack grow "
            placeholder={placeholder}
            value={listItem}
            onChange={updateInput}
          />
          <button
            type="submit"
            className="bg-customGreen text-white   p-3 uppercase text-sm font-semibold  duration-200 hover:text-customBlack hover:bg-customYellow tracking-wider"
          >
            add
          </button>
        </div>
        <ul className="grid gap-2  lg:grid-cols-2 max-h-52 overflow-auto">
          {itemsList.map((item, index) => (
            <li
              className=" bg-customYellow text-customBlack font-bold p-2 flex items-center group"
              key={index}
            >
              <span className="grow mr-2">
                {item.length > 30 ? item.slice(0, 30) + "..." : item}
              </span>
              <span
                className="bg-customWhite inline-block rounded-full p-2 cursor-pointer transition-all duration-200 hover:scale-105 hover:bg-customRed hover:text-white"
                onClick={() => deleteItem(item)}
              >
                <IoMdClose />
              </span>
            </li>
          ))}
        </ul>
      </form>
    </>
  );
};

export default ItemsList;
