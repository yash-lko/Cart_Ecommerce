import React, { useState } from "react";
import { useSpreadsheet } from "./SpreadsheetProvider";

const Cell = ({ row, col }) => {
  const key = `${String.fromCharCode(65 + col)}${row + 1}`;
  const { data, setCell, getCellDisplayValue } = useSpreadsheet();
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(data[key] || "");

  const handleBlur = () => {
    setCell(key, value);
    setEditing(false);
  };

  return (
    <td
      onClick={() => setEditing(true)}
      style={{ border: "1px solid #ccc", padding: "5px", minWidth: "80px" }}
    >
      {editing ? (
        <input
          autoFocus
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={handleBlur}
        />
      ) : (
        getCellDisplayValue(key)
      )}
    </td>
  );
};

export default Cell;
