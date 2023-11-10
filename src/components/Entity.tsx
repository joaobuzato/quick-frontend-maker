import React from "react";
import EntityList from "./EntityList";

interface DataItem {
  [key: string]: any;
}

interface Props {
  data: DataItem;
}

function Entity({ data }: Props) {
  console.log("ENTITY!!!!", data);
  let columns: string[] = Object.keys(data);
  console.log(columns);

  return (
    <div>
      {columns.map((column) => {
        return (
          <div key={column}>
            <div>{column}</div>
            {Array.isArray(data[column]) ? (
              <EntityList dataList={data[column]}></EntityList>
            ) : (
              <div>{data[column]}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Entity;
