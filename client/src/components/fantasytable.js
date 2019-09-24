
import MaterialTable from 'material-table';
import React, { Component } from 'react'




export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'years pro', field: 'yearpro', type: 'numeric' },
      { title: 'Team', field: 'team',  },
      {
        title: 'position',
        field: 'position',
        lookup: { 34: 'QB', 63: 'WR' },
      },
    ],
    data: [
      { name: 'Mehmet', surname: 'Baran', yearpro: 2,team:"Patriots", position: 63 },
      {
        name: 'Zerya Betül',
        surname: 'Baran',
        yearpro: 3,
        team:"Patriots",
        position: 34,
      },
    ],
  });

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
  );
}