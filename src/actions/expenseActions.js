import dispatcher from "../dispatcher";

export function createExpense(expense){
  dispatcher.dispatch({
    type: "CREATE_EXPENSE",
    expense,
  });

}
