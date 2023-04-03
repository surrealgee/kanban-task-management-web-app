import { useState } from "react";
import data from "../data.json";

function useData() {
  const [boardsData, setBoardsData] = useState(data);

  //   console.log(boardsData);

  return { boardsData };
}

export default useData;
