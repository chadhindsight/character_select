import { database, authenticate} from "../database/config";

export function loadCharacters(characters) {
    return (dispatch) => {
        return database.ref('characters').once('value').then(snapshot => {
            let characters = []
            snapshot.forEach((childSnapshot) => {
                characters.push(childSnapshot.val())
            })
            // Double check this
            dispatch(charLoad(characters))
        })
    }
}
export function signIn(user, password) {
    // Use authenticate in here
    return authenticate(user, password)
}
export  function characterSelect(char) {
    return {
        type: 'SELECT_CHARACTER',
        char
    }
}