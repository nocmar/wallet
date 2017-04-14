import React from "react";
import * as Table from 'reactabular-table';

import cloneDeep from 'lodash/cloneDeep';
import orderBy from 'lodash/orderBy';
import { compose } from 'redux';
import * as resolve from 'table-resolver';
import VisibilityToggles from 'reactabular-visibility-toggles';
import * as tree from 'treetabular';
import * as search from 'searchtabular';
import * as sort from 'sortabular';
import * as edit from 'react-edit';
import { createRow, editRow, confirmEdit } from "../../actions/budgetRowActions";
import { findIndex } from 'lodash';

export default class Budgets extends React.Component {
  constructor(props) {
    super(props);

    const columns = this.getColumns();
    const rows = resolve.resolve({ columns })(this.rows);
    this.state = {
      editedCell: null, // Track the edited cell somehow
      searchColumn: 'all',
      query: {},
      sortingColumns: null,
      rows,
      columns
    };

    this.onExpandAll = this.onExpandAll.bind(this);
    this.onCollapseAll = this.onCollapseAll.bind(this);
    this.onToggleColumn = this.onToggleColumn.bind(this);
  }

  schema = {
    type: 'object',
    properties: {
      id: {
        type: 'string'
      },
      category: {
        type: 'string'
      },
      value: {
        type: 'integer'
      }
    },
    required: ['id', 'category', 'value']
  };
  getColumns() {
    const editable = edit.edit({
      // Determine whether the current cell is being edited or not.
      isEditing: ({ columnIndex, rowData }) => columnIndex === rowData.editing,

      // The user requested activation, mark the current cell as edited.
      // IMPORTANT! If you stash the rows at this.state.rows, DON'T
      // mutate it as that will break Table.Body optimization check.
      onActivate: ({ columnIndex, rowData }) => {
        const index = findIndex(this.state.rows, { id: rowData.id });
        const rows = cloneDeep(this.state.rows);

        rows[index].editing = columnIndex;

        this.setState({ rows });
      },

      // Capture the value when the user has finished and update
      // application state.
      onValue: ({ value, rowData, property }) => {
        const index = findIndex(this.state.rows, { id: rowData.id });
        const rows = cloneDeep(this.state.rows);

        rows[index][property] = value;
        rows[index].editing = false;

        // Optional: capture the fact that a field was edited for visualization
        rows[index].edited = true;

        this.setState({ rows });
      }
    });
    //   const editable = edit.edit({
    //   isEditing: ({ columnIndex, rowData }) => columnIndex === rowData.editing,
    //   onActivate: ({ columnIndex, rowData }) => {
    //     alert("edit");
    //     editRow(columnIndex, rowData.id);
    //   },
    //   onValue: ({ value, rowData, property }) => {
    //      alert("edit");
    //     confirmEdit(property, value, rowData.id);
    //   }
    // });


    const sortable = sort.sort({
      // Point the transform to your rows. React state can work for this purpose
      // but you can use a state manager as well.
      getSortingColumns: () => this.state.sortingColumns || {},

      // The user requested sorting, adjust the sorting state accordingly.
      // This is a good chance to pass the request through a sorter.
      onSort: selectedColumn => {
        const sortingColumns = sort.byColumns({
          sortingColumns: this.state.sortingColumns,
          selectedColumn
        });

        this.setState({ sortingColumns });
      }
    });

    return [
      {
        property: 'category',
        props: {
          style: { width: 200 }
        },
        header: {
          label: 'Category',
          transforms: [sortable]
        },
        cell: {
           formatters: [
            tree.toggleChildren({
              getRows: () => this.state.rows,
              getShowingChildren: ({ rowData }) => rowData.showingChildren,
              toggleShowingChildren: rowIndex => {
                const rows = cloneDeep(this.state.rows);

                rows[rowIndex].showingChildren = !rows[rowIndex].showingChildren;

                this.setState({ rows });
              },
              // Inject custom class name per row here etc.
              props: {}
            })
          ],
          transforms: [editable(edit.input())]
        },
        visible: true
      },
      {
        property: 'value',
        props: {
          style: { width: 300 }
        },
        header: {
          label: 'Value',
          transforms: [sortable]
        },
         cell: {
          transforms: [editable(edit.input())]
        },
        visible: true
      }
    ];
  }
  rows = [
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
  ];

  render() {
    const {
      searchColumn, columns, sortingColumns, query
    } = this.state;
    const visibleColumns = columns.filter(column => column.visible);
    const rows = compose(
      tree.filter({ fieldName: 'showingChildren' }),
      tree.wrap({
        operations: [
          sort.sorter({
            columns,
            sortingColumns,
            sort: orderBy
          })
        ]
      }),
      tree.search({
        operation: search.multipleColumns({ columns, query })
      })
    )(this.state.rows);

    return (
      <div>
        <VisibilityToggles
          columns={columns}
          onToggleColumn={this.onToggleColumn}
        />

        <button onClick={this.onExpandAll}>Expand all</button>
        <button onClick={this.onCollapseAll}>Collapse all</button>

        <div className="search-container">
          <span>Search</span>
          <search.Field
            column={searchColumn}
            query={query}
            columns={visibleColumns}
            rows={rows}
            onColumnChange={searchColumn => this.setState({ searchColumn })}
            onChange={query => this.setState({ query })}
          />
        </div>

        <Table.Provider
          className="pure-table pure-table-striped"
          columns={visibleColumns}
        >
          <Table.Header />

          <Table.Body rows={rows} rowKey="id" />
        </Table.Provider>
      </div>
    );
  }
  onExpandAll() {
    this.setState({
      rows: tree.expandAll()(this.state.rows)
    });
  }
  onCollapseAll() {
    this.setState({
      rows: tree.collapseAll()(this.state.rows)
    });
  }
  onToggleColumn({ columnIndex }) {
    const columns = cloneDeep(this.state.columns);

    columns[columnIndex].visible = !columns[columnIndex].visible;

    this.setState({ columns });
  }
}
