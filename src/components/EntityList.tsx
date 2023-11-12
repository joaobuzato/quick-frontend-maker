import React from "react";
import Entity from "./Entity";
import classes from "./Entity.module.css";


interface DataItem {
  [key: string]: any;
}

interface Props {
  dataList: DataItem[];
}

function EntityList({ dataList }: Props) {
  return (
    <div className={classes.list}>
      {dataList.map((item, index) => {
        return <Entity key={index} data={item}></Entity>;
      })}
    </div>
  );
}

export default EntityList;
