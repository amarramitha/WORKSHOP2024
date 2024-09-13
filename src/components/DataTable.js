import React from 'react';

const DataTable = ({ config, data }) => {
  return (
    <table class="min-w-full bg-white shadow-md rounded">
      <thead>
        <tr>
          {config.map((column) => (
            <th class="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-black uppercase tracking-wider" key={column.id}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr class="bg-gray-50" key={rowIndex}>
            {config.map((column) => (
              <td class="py-4 px-6 border-b border-gray-200 text-sm text-black" key={column.id}>{row[column.id]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
