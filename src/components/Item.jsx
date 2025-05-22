import { useDispatch } from "react-redux";
import { deleteTask, toggleTask, updateTask } from "../redux/slice/todos";
import { EditIcon, X, Save } from "lucide-react";
import { useState } from "react";

export default function Item({ item }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(item.description);
  const [editedQuantity, setEditedQuantity] = useState(item.quantity);
  console.log(item.id);
  function handleEditToggle() {
    if (isEditing) {
      dispatch(
        updateTask({
          id: item.id,
          description: editedDescription,
          quantity: editedQuantity,
        })
      );
    }
    setIsEditing(!isEditing);
  }

  return (
    <li className="flex items-center gap-2 p-2 border-b">
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => dispatch(toggleTask(item.id))}
      />

      {isEditing ? (
        <div className="flex gap-2 items-center">
          <input
            type="text"
            value={editedQuantity}
            onChange={(e) => setEditedQuantity(e.target.value)}
            className="w-12 border px-1"
          />
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="border px-1"
          />
        </div>
      ) : (
        <span className={item.packed ? "line-through" : ""}>
          {item.quantity} {item.description}
        </span>
      )}

      <button onClick={handleEditToggle} title={isEditing ? "Save" : "Edit"}>
        {isEditing ? <Save /> : <EditIcon />}
      </button>

      <button onClick={() => dispatch(deleteTask(item.id))} title="Delete">
        <X />
      </button>
    </li>
  );
}
