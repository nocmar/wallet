import axios from "axios";

export function fetchExpenses(){
   return function(dispatch) {
    axios.get("api/expenses")
      .then((response) => {
        dispatch({type: "FETCH_EXPENSES_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_EXPENSES_REJECTED", payload: err})
      })
  }
}
export function addExpense(expense){
  // dispatcher.dispatch({
  //   type: "CREATE_EXPENSE",
  //   expense,
  // });
}
export function updateExpenseCategory(expense,newCategory){
   expense.category = newCategory;
    var data = JSON.stringify(expense);
  return function(dispatch) {
      axios.put('/api/expenses', data, {
    headers: {
        'Content-Type': 'application/json',
         'Accept': 'application/json'
    }})
     .then((response) => {
        dispatch({type: "UPDATE_EXPENSE", payload: expense})
      })
      .catch((err) => {
        dispatch({type: "UPDATE_EXPENSE_ERROR", payload: err})
      })
     }
  
}

export function approveExpense(expense){
    expense.approved = true;
     var data = JSON.stringify(expense);
  return function(dispatch) {
      axios.put('/api/expenses', data, {
    headers: {
        'Content-Type': 'application/json',
         'Accept': 'application/json'
    }})
     .then((response) => {
        dispatch({type: "UPDATE_EXPENSE", payload: expense})
      })
      .catch((err) => {
        dispatch({type: "UPDATE_EXPENSE_ERROR", payload: err})
      })
     }
}