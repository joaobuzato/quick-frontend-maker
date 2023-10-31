import React from "react";

interface DataItem {
  [key: string]: any;
}

interface Props {
  data: DataItem[];
  onReturnCallback: Function;
}

function ItemTable({ data, onReturnCallback }: Props) {
  let columns: string[] = [];
  if (!data || data.length === 0) {
    return (
      <>
        <div>No data to display</div>
        <button onClick={() => onReturnCallback()}>Voltar</button>
      </>
    );
  }
  if (!Array.isArray(data)) {
    columns = Object.keys(Array.from(data));
  } else {
    columns = Object.keys(data[0]);
  }

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
          {Array.from(data).map((item) => (
            <tr key={item[columns[0]]}>
              {columns.map((column) => {
                if (Array.isArray(item[column])) return <td>Array</td>;
                return <td key={column}>{String(item[column])}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => onReturnCallback()}>Voltar</button>
    </div>
  );
}

export default ItemTable;
