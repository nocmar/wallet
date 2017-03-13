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
  // dispatcher.dispatch({
  //   type: "UPDATE_EXPENSE_CATEGORY",
  //   expense,newCategory,
  // });
}

export function approveExpense(expense){
  // dispatcher.dispatch({
  //   type: "APPROVE_EXPENSE",
  //   expense,
  // });
}