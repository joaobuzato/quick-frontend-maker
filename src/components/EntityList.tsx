import React from "react";
import Entity from "./Entity";

interface DataItem {
  [key: string]: any;
}

interface Props {
  dataList: DataItem[];
}

function EntityList({ dataList }: Props) {
  return (
    <div>
      {dataList.map((item) => {
        return <Entity key={item[0]} data={item}></Entity>;
      })}
    </div>
  );
}

export default EntityList;
