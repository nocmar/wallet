import { cloneDeep, findIndex } from 'lodash';

export default function reducer (state={rows: [
    {
      id: 123,
      category: 'Demo',
      value: 100
    },
    {
      id: 456,
      category: 'Another',
      value: 100,
      parent: 123
    },
    {
      id: 789,
      category: 'Yet Another',
      value: 100,
      parent: 123
    },
    {
      id: 532,
      value: 100,
      category: 'Foobar'
    }
  ]}, action) {
  const row = action.row;
  const index = row && findIndex(state.rows, { id: row.id });

  switch (action.type) {
    case 'CREATE_ROW':
      return [row].concat(state);

    case 'DELETE_ROW':
      if (index >= 0) {
        return state.slice(0, index).concat(state.slice(index + 1));
      }

    case 'EDIT_ROW':
      if (index >= 0) {
        return editProperty(state.rows, index, {
          editing: row.columnIndex
        });
      }

    case 'CONFIRM_EDIT':
      if (index >= 0) {
        return editProperty(state.rows, index, {
          [row.property]: row.value,
          editing: false
        });
      }

    default:
      return state;
  }

  return state;
};

function editProperty(rows, index, values) {
  // Skip mutation, there's likely a neater way to achieve this
  const ret = cloneDeep(rows);

  Object.keys(values).forEach(v => {
    ret[index][v] = values[v];
  });

  return ret;
}