import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { v4 as uuidGenerator } from "uuid";

const ItemsList = ({
  itemsList,
  setItemsList,
  label,
  placeholder,
  isLoading,
}) => {
  const [listItem, setListItem] = useState("");

  function appendItem(e) {
    e.preventDefault();
    setItemsList((prev) => [...prev, { id: uuidGenerator(), text: listItem }]);
    setListItem("");
  }

  function updateInput(e) {
    setListItem(e.target.value);
  }

  function deleteItem(targetItemId) {
    setItemsList((prev) => {
      const newList = prev.filter((item) => item.id != targetItemId);
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
            disabled={isLoading}
            type="text"
            className="bg-customLightGray p-4  transition-all duration-200 ease-in-out  border-2 border-transparent   focus-within:border-customBorderColor placeholder:text-customBlack grow animate  disabled:bg-customBorderColor
            disabled:placeholder:text-gray-400
            disabled:cursor-not-allowed
            "
            placeholder={placeholder}
            value={listItem}
            onChange={updateInput}
          />
          <button
            disabled={isLoading}
            type="submit"
            className="bg-customGreen text-white   p-3 uppercase text-sm font-semibold  duration-200 hover:text-customBlack hover:bg-customYellow tracking-wider
            disabled:bg-gray-500
            disabled:text-gray-400
            disabled:cursor-not-allowed
            "
          >
            add
          </button>
        </div>
        <ul className="grid gap-2  lg:grid-cols-2 max-h-52 overflow-auto">
          {itemsList.map((item) => {
            return (
              <li
                className=" bg-customYellow text-customBlack font-bold p-2 flex items-center group"
                key={item.id}
              >
                <span className="grow mr-2">
                  {item.length > 30
                    ? item.text.slice(0, 30) + "..."
                    : item.text}
                </span>
                <span
                  className="bg-customWhite inline-block rounded-full p-2 cursor-pointer transition-all duration-200 hover:scale-105 hover:bg-customRed hover:text-white"
                  onClick={() => deleteItem(item.id)}
                >
                  <IoMdClose />
                </span>
              </li>
            );
          })}
        </ul>
      </form>
    </>
  );
};

export default ItemsList;
