import React from "react";
import EntityList from "./EntityList";
import classes from "./Entity.module.css";

interface DataItem {
  [key: string]: any;
}

interface Props {
  data: DataItem;
}

function Entity({ data }: Props) {
  let columns: string[] = Object.keys(data);

  return (
    <div className={classes.entity}>
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
