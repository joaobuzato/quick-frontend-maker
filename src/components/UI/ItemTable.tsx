import React from "react";

interface DataItem {
  id: number;
  [key: string]: any;
}

interface Props {
  data: DataItem[];
}

function ItemTable({ data }: Props) {
  if (!data || data.length === 0) {
    return <div>No data to display</div>;
  }

  const columns = Object.keys(data[0]);

  return (
    <div>
      <h2>Dados</h2>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              {columns.map((column) => {
                if (!Array.isArray(item[column]))
                  return <td key={column}>{String(item[column])}</td>;
                else return <td>Array</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ItemTable;
