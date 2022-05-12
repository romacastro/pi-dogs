import axios from "axios";

export function getDogs(){
    return async function(dispatch){
        let json = await axios.get("http://localhost:3001/dogs",{

        });
        return dispatch({
            type:"GET_DOGS",
            payload: json.data
        })
    }
}
export function getNameDogs(name){
    return async function(dispatch){
        try{
            let json = await axios.get("http://localhost:3001/dogs?name= + name")
            return dispatch({
                type: "GET_NAME_DOGS",
                payload:json.data
            })
        }catch(error){

        }
    }
}
export function sortBreedsByName(payload){
    return{
        type:"ORDER_BREEDS_BY_NAME",
        payload
    }
}
export function sortByWeight(payload){
    return{
        type: "ORDER_BY_WEIGHT",
        payload
    }
}
export function filterByTemperament(payload){
    return ({
        type:"FILTER_BY_TEMPERAMENT",
        payload
    })
}
export function getTemperament(){
    return async function(dispatch){
        try{
        var info=await axios.get("http://localhost:3001/temperament");
        return dispatch({
            type:"GET_TEMPERAMENT",
            payload:info.data
        })
    }catch(error){
        
    }
    }
}
export function postDog(payload){
    return async function(dispatch){
        const response= await axios.post("http://localhost:3001/dog", payload)
        return response;
    }
}
export function filterByCreation(payload){
    return{
        type:"FILTER_BY_CREATION",
        payload
    }
}
export function getDetail(id){
    return async function(dispatch){
        try{
            let json= await axios.get("http://localhost:3001/dog/" + id);
            return dispatch({
                type:"GET_DETAIL",
                payload:json.data
            })
        }catch(error){

        }
    }
}