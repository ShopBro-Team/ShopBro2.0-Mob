const budget = (state = '', action) => {
  switch (action.type) {
    case 'ADD_BUDGET':
      return action.budget
    case 'LOGOUT_SUCCESS': 
      return ''
    case 'RESET_APP':
      return ''  
    default:
      return state
  }
}
  
export default budget