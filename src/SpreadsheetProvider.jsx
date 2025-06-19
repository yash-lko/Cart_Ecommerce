import React, { createContext, useContext, useState } from "react";
import { evaluateFormula } from "./utils";

const SpreadsheetContext = createContext();

export const useSpreadsheet = () => useContext(SpreadsheetContext);

export const SpreadsheetProvider = ({ children }) => {
  const [rows, setRows] = useState(10);
  const [cols, setCols] = useState(10);
  const [data, setData] = useState({});

  const setCell = (key, value) => {
    setData((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  const getCellDisplayValue = (key) => {
    const value = data[key];
    if (typeof value === "string" && value.startsWith("=")) {
      try {
        return evaluateFormula(value.slice(1), data);
      } catch {
        return "ERR";
      }
    }
    return value || "";
  };

  const addRow = () => setRows((r) => r + 1);
  const addCol = () => setCols((c) => c + 1);

  return (
    <SpreadsheetContext.Provider
      value={{ rows, cols, data, setCell, getCellDisplayValue, addRow, addCol }}
    >
      {children}
    </SpreadsheetContext.Provider>
  );
};
