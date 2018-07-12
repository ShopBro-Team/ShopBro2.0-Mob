import request from '../../api/api'

export function receiveShoppingListTotals(shoppinglistTotals){
    return {
        type: 'RECIEVE_SHOPPINGLIST_TOTALS_BY_ID',
        shoppinglistTotals 
    }
}

export function showError(errorMessage){
    console.log(errorMessage)
    return {
        type: 'ERROR'
    }
}

//Use this function to get a shopping list by shopping list id 
//You must use component did mount
export function getShoppingListTotals() {
    return (dispatch) => {
        return request( 'get', 'v1/shoppingliststotals' )
        .then (res => {
            dispatch(receiveShoppingListTotals(res.body))
        })
        .catch(err => {
            dispatch(showError(err.message))
        })
    }
}