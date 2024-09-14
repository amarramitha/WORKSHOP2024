

import React from 'react';

const DataTable = ({ config, data }) => {
  return (
    <table className="min-w-full bg-white shadow-md rounded">
      <thead>
        <tr>
          {config.map((column) => (
            <th key={column.id} className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-black uppercase tracking-wider">{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="border-t">
            {config.map((column) => (
              <td key={column.id} className="py-4 px-6 border-b border-gray-200 text-sm text-black">
                {/* Cek jika kolom adalah 'img' dan tampilkan gambar */}
                {column.id === 'img' && row[column.id] ? (
                  <img src={row[column.id]} alt={row.title} className="h-16 w-16 object-cover rounded-lg" />
                ) : (
                  row[column.id]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
