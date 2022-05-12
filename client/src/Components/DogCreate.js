import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import { postDog, getTemperament} from "../actions/index.js"

function validate(input){
    let errors={};
    if((!input.name)&&(!input.name.length >3 || !input.name.length <80)){
        errors.name="El nombre debe tener entre 3 y 80 caracteres"
    }
    else if((!input.height_min)&&(!input.height_min===Number)){
        errors.height_min="Definir altura minima";
    }
    else if(!input.height_max && !input.height_max===Number){
        errors.height_max="Definir altura maxima";
    }
    else if(!input.weight_min &&!input.weight_min===Number){
        errors.weight_min="Definir peso minimo";
    }
    else if(!input.weight_max && !input.weight_max===Number){
        errors.weight_max="Definir peso maximo";
    }
    else if(!input.life_span_min && !input.life_span_min===Number){
        errors.life_span_min="Definir valor minimo";  
    
    }else if(!input.life_span_max &&!input.life_span_max===Number){
        errors.life_span_max="Definir valor maximo";  
    }
    return errors;
}
export default function DogCreate(){
    const dispatch=useDispatch();
    const temperament= useSelector((state)=>state.temperaments);
    const [errors, setErrors]=useState({});
    const [input, setInput]=useState({
        name:"",
        height_min:"",
        height_max:"",
        weight_min:"",
        weigth_max:"",
        life_span_min:"",
        life_span_max:"",
        createdInDb:true,
        temperament:[]
    })
    function handleDelete(e){
        setInput({
            ...input,
        
     temperament:input.temperament.filter((temperament)=>temperament !==e)   
    })
}
function handleChange(e){
    setInput({
        ...input,
        [e.target.name]:e.target.value
    })
    setErrors(validate({
        ...input,
        [e.target.name]:e.target.value
    }))
}
function handleSelect(e){
    setInput({
        ...input,
        temperament:[...input.temperament, e.target.value]
    })
}
function handleSubmit(e){
    e.preventDefault();
    setErrors(validate({
        ...input,
        [e.target.value]:e.target.value

    }
    ));
    dispatch(postDog(input))
    alert("Perro agregado")
    setInput({
        name:"",
        height_min:"",
        height_max:"",
        weight_min:"",
        weigth_max:"",
        life_span_min:"",
        life_span_max:"",
        createdInDb:true,
        temperament:[]
    })

}
useEffect(()=>{
    dispatch(postDog())
},[dispatch]);

return(
     <div>
    <Link to='/home'><button>Volver</button></Link> 
    <h2>Formulario para adherir nueva raza</h2>   

    <div>
        <form onSubmit={handleSubmit}>
    <div>        
        <label>Raza:</label>
        <input key="name" 
        type="text"
        value={input.name}
        name="name"
        placeholder="Escribe nueva raza..."
        
        onChange={e =>handleChange(e)}/>
      
        { errors.name && (
            <p>(errors.name)</p>
        )}
    </div>
    
    <div>
        <label>Altura minima(cm):</label>
        <input key="alturamin"
        type="number"
        placeholder="Ingresar altura minima..."
        value={input.height_min}
        name="height_min"
        
        onChange={handleChange}>
        </input>
        {errors.height_min && (
            <p>{errors.height_min}</p>
        )}
    
    </div>
    <div>
    <label>Altura maxima(cm):</label>
        <input key="alturamax"
        type="number"
        placeholder="Ingresar altura maxima..."
        value={input.height_max}
        name="height_max"
        required
        onChange={handleChange}/>


        {errors.height_max && (
            <p>{errors.height_max}</p>
        )}   
    </div>

    <div>
    <label>Peso minimo(kg):</label>
        <input key="pesomin"
        type="number"
        min="0"
        placeholder="Ingresar peso minimo..."
        value={input.weight_min}
        name="weight_min"
        required
        onChange={handleChange}/>

            {errors.weight_min && (
            <p>{errors.weight_min}</p>
        )}   
    </div>
    <div>
    <label>Peso maximo(kg):</label>
        <input key="pesomax"
        type="number"
        placeholder="Ingresar peso maximo..."
        value={input.weight_max}
        name="weight_max"
        required
        onChange={handleChange}/>

            {errors.weight_max && (
            <p>{errors.weight_max}</p>
        )}   
    </div>
    <div>
    <label>Años de vida minimo:</label>
        <input key="vidamin"
        type="number"
        min="0"
        placeholder="Ingresar minimo de vida..."
        value={input.life_span_min}
        name="life_span_min"
        required
        onChange={handleChange}/>

            {errors.life_span_min && (
            <p>{errors.life_span_min}</p>
        )} 
    </div>
    <div>
    <label>Años de vida maximo:</label>
        <input key="vidamax" type="number"
        max="100"
        placeholder="Ingresar miaximo de vida..."
        value={input.life_span_max}
        name="life_span_max"
        required
        onChange={handleChange}/>

            {errors.life_span_max && (
            <p>{errors.life_span_max}</p>
        )} 
        </div>
        <div>
        <label>Temperamentos:</label>  
        <select name="temperament" 
        onChange={(e)=>handleSelect(e)}>
            {temperament?.map(temperament=>(
                <option key={temperament.id}
                value={temperament.name}>{temperament.name}</option>))}
        </select>
        
        </div>
        {input.temperament.map(e=>
            <div>
                <p>{e}</p>
                <button type="button" onClick={()=>
                handleDelete(e)}>X</button>
            </div>)}
            {
             !(errors.height_min && errors.height_max && errors.weight_min && errors.weight_max &&
                errors.life_span_min && errors.life_span_max)&&
                <input type="submit"/>
            
            }
            </form>
            </div>
            </div>
)
}