import React from "react";
import Entity from "./Entity";

interface DataItem {
  [key: string]: any;
}

interface Props {
  dataList: DataItem[];
}

function isSimpleType(item: any) {
  return (
    typeof item === "string" ||
    typeof item === "number" ||
    typeof item === "boolean"
  );
}

function EntityList({ dataList }: Props) {
  console.log("Entity List!", dataList);
  return (
    <div>
      {dataList.map((item) => {
        return isSimpleType(item) ? (
          <div key={String(item)}>{String(item)}</div>
        ) : (
          <Entity key={item[0]} data={item}></Entity>
        );
      })}
    </div>
  );
}

export default EntityList;
