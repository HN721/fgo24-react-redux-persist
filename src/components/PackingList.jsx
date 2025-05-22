import { useState } from "react";
import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
import { clearTasks } from "../redux/slice/todos";

export default function PackingList() {
  // const { items, onClearList } = useContext(TravelContext);
  const [sortBy, setSortBy] = useState("input");
  const items = useSelector((state) => state.todo.data);
  const dispatch = useDispatch();
  console.log(items);
  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className=" flex justify-between flex-col mb-12 items-center">
      <ul className="grid grid-cols-4 gap-6">
        {sortedItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>

      <div className="  text-xl flex gap-6  font-mono ">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={dispatch(clearTasks)}>Clear list</button>
      </div>
    </div>
  );
}
