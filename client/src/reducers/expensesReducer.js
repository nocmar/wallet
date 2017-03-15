export default function reducer(state={
    expenses: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_EXPENSES": {
        return {...state, fetching: true}
      }
      case "FETCH_EXPENSES_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_EXPENSES_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          expenses: action.payload,
        }
      }
      case "ADD_EXPENSE_SUCCESS": {
        return {
          ...state,
          expenses: [...state.expenses, action.payload],
        }
      }
      case "UPDATE_EXPENSE": {
        const newExpense = action.payload
        const newExpenses = [...state.expenses]
        const expensetToUpdate = newExpenses.findIndex(expense => expense.id === newExpense.id)
        newExpenses[expensetToUpdate] = newExpense

        return {
          ...state,
          expenses: newExpenses,
        }
      }
    //   case "DELETE_TWEET": {
    //     return {
    //       ...state,
    //       tweets: state.tweets.filter(tweet => tweet.id !== action.payload),
    //     }
    //   }
    }

    return state
}