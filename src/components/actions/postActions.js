import {GET_POSTS, SET_LOADING, LOGS_ERROR, POST_ERROR} from '../actions/types'


export const getPosts = ()=> async dispatch=>{
    try {
        setLoading();

        const res= await fetch ('/posts');
        const data = await res.json()

        dispatch({
            type: GET_POSTS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: POST_ERROR,
            payload: error.response.data
        })
    }


            
}




// Set Loading to true
export const setLoading =()=>{
    return{
        type: SET_LOADING
    }
}