import React from "react";
import { SpreadsheetProvider } from "./SpreadsheetProvider";
import Grid from "./Grid";

function App() {
  return (
    <SpreadsheetProvider>
    
      <Grid />
    </SpreadsheetProvider>
  );
}

export default App;
