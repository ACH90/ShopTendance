import axios from "axios";

export const GET_USER = "GET_USER";
export const ADD_USER_LIKE = "ADD_USER_LIKE";

export const getUser = () => {
    return (dispatch)=> {
        return axios.get("http://localhost:3000/posts").then((res) => { //Communiquer et Récupération des données
            // dispatch({ type: GET_POSTS, payload: res.data }) //Communique avec le reducer
            dispatch({type: GET_USER, payload: res.data[0]}) //Communiquer avec le reducer et lui demander d'afficher a l'écran
        })
    }
}

export const addUserLike = (data) => {
    return (dispatch)=> {
        return axios
        .put(`http://localhost:3000/posts/${data.id}`, data)
        .then((res) => { 
            dispatch({type: ADD_USER_LIKE, payload: data}) 
    })
    }
}