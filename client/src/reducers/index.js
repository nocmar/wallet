import { combineReducers } from "redux"

import expenses from "./expensesReducer"
import budgetRow from "./budgetRowReducer"

export default combineReducers({
  expenses, budgetRow
})