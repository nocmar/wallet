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
    this.updateExpense(expense);
  // dispatcher.dispatch({
  //   type: "UPDATE_EXPENSE_CATEGORY",
  //   expense,newCategory,
  // });
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
        dispatch({type: "APPROVED_EXPENSE", payload: expense.id})
      })
      .catch((err) => {
        dispatch({type: "APPROVED_EXPENSE_ERROR", payload: err})
      })
     }
  // dispatcher.dispatch({
  //   type: "APPROVE_EXPENSE",
  //   expense,
  // });
}