import { combineReducers } from 'redux'

import auth from './auth'
import dashboardShoppingListTotals from './dashboardShoppingListTotals'
import budgetView from './budget-View'
import budget from './budget'

export default combineReducers({
  auth,
  dashboardShoppingListTotals,
  budgetView,
  budget
})