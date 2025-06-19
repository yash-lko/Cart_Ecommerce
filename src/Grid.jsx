import React from "react";
import { useSpreadsheet } from "./SpreadsheetProvider";
import Cell from "./Cell";

const Grid = () => {
  const { rows, cols, addRow, addCol } = useSpreadsheet();

  const header = [...Array(cols)].map((_, c) => (
    <th key={c}>{String.fromCharCode(65 + c)}</th>
  ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            {header}
          </tr>
        </thead>
        <tbody>
          {[...Array(rows)].map((_, r) => (
            <tr key={r}>
              <th>{r + 1}</th>
              {[...Array(cols)].map((_, c) => (
                <Cell key={c} row={r} col={c} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addRow}>Add Row</button>
      <button onClick={addCol}>Add Column</button>
    </div>
  );
};

export default Grid;
