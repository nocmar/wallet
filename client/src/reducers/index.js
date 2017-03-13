import { combineReducers } from "redux"

import expenses from "./expensesReducer"

export default combineReducers({
  expenses,
})