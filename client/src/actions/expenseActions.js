import dispatcher from "../dispatcher";

export function createExpense(expense){
  dispatcher.dispatch({
    type: "CREATE_EXPENSE",
    expense,
  });
}

export function updateExpenseCategory(expense,newCategory){
  dispatcher.dispatch({
    type: "UPDATE_EXPENSE_CATEGORY",
    expense,newCategory,
  });
}

export function approveExpense(expense){
  dispatcher.dispatch({
    type: "APPROVE_EXPENSE",
    expense,
  });
}