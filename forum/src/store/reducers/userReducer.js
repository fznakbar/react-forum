const defaultState = {
    users : [],
    favorites : []
}

const userReducer = (state = defaultState, action) => {

    switch (action.type) {
        case 'ADD_FAVORITES':
            const find =  state.favorites.find((el) => el.name === action.payload.name)
            if(!find){
                let newFavorites = state.favorites.concat(action.payload)
                return {...state, favorites : newFavorites }
            } else {
                return state
            }
            
        case 'GET_USERS':
            let newUsers = action.payload.users
            return {...state, users : newUsers }

        case 'DELETE_USER':
            let hideUsers = state.users.filter((el) => el.name.first !== action.payload)
            return {...state, users : hideUsers }
    
        default:
            return state
    }

} 

export default userReducer