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
  function isSimpleType(item: any) {
    return (
      typeof item === "string" ||
      typeof item === "number" ||
      typeof item === "boolean"
    );
  }
  if (isSimpleType(data)) {
    return <div key={String(new Date())} className={classes.data}>{String(data)}</div>;
  }

  let columns: string[] = Object.keys(data);

  return (
    <div className={classes.entity}>
      {columns.map((column,index) => {
        return (
          <div key={index} className={classes.column}>
            <div className={classes.nameData}>{column}</div>
            {Array.isArray(data[column]) ? (
              <EntityList dataList={data[column]}></EntityList>
            ) : (
              <Entity data={data[column]}></Entity>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Entity;
