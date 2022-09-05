export const initState = {
    Number: 0,
    Name: "Maxamad",
    Boolean: false
}


export const reducer = (State, action)  => {
    switch(action.type){
        case "ADD":
            return {
                Number: + 1
            }
        case "JAR" :
            return {
                Number: - 1
            }
        default:
            return State
    }
}