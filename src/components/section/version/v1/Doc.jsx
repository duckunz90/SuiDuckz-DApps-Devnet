import React, { useState } from 'react';

import { DocContainer, TableContainer } from './doc.style';

const Doc = () => {
  
  const sampleData = [
    { id: 1, version: '1.0', updates: ['- Join Discord', '- Additional Pages'], date: '2024-03-12' },
    { id: 1, version: '1.1', updates: ['- Connect Wallet', '- Add DApps Menu'], date: '2024-04-07' },
    { id: 1, version: '1.2', updates: ['- SuiDuckz Story'], date: '2024-06-09' },
    { id: 1, version: '1.2.1', updates: ['- SuiDuckz Story update chapter'], date: '2024-06-30' },
  ];

  const [data, setData] = useState(sampleData);

  return (
    <DocContainer>
      <TableContainer>
        <h1>Docs</h1>
        <table>
          <thead>
            <tr>
              <th>Version</th>
              <th>Updates</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.version}</td>
                <td>
                  <ul>
                    {item.updates.map((update, index) => (
                      <li key={index}>{update}</li>
                    ))}
                  </ul>
                </td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableContainer>
    </DocContainer>
  );
};

export default Doc;
