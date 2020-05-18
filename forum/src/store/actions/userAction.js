export const getUsers = () =>{
    return async (dispatch, getState) => {
        const res = await fetch ('https://randomuser.me/api/?results=201')
        const users = await res.json()
        dispatch({
            type : 'GET_USERS',
            payload : {
                users : users.results
            }
        })
    }
}

export const addFavorite = data => {
    return ({
        type : 'ADD_FAVORITES',
        payload : data.payload
    })
}

export const hideUser = (name) => {
    return ({
        type : 'DELETE_USER',
        payload : name
    })
}