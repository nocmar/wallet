import uuid from 'uuid';

export function createRow() {
    return function (dispatch) {
        dispatch({
            type: 'CREATE_ROW',
            row: { category: 'Category', value:0, id: uuid.v4() }
        })
    }
}


export function deleteRow(id) {
    return function (dispatch) {
        dispatch({
        type: 'DELETE_ROW',
        row: { id }
    })
    }
}


export function editRow(columnIndex, id) {
    return function (dispatch) {
        dispatch({
        type: 'EDIT_ROW',
        row: { columnIndex, id }
    })
    }
}


export function confirmEdit(property, value, id) {
    return function (dispatch) {
        dispatch({
        type: 'CONFIRM_EDIT',
        row: { property, value, id }
    })
    }
}


export function updateRows(rows) {
    return function (dispatch) {
        dispatch({
        type: 'UPDATE_ROWS',
        rows: rows
    })
    }
}