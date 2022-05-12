import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameDogs } from "../actions/index";
import  "./SearchBar.css"

export default function SearchBar(){
    const dispatch= useDispatch();
    const [name, setName]=useState("");

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        dispatch(getNameDogs(name))
        setName("")
    }

    return (
        <div className="searchBar">
            <input
            type="text"
            placeholder="Buscar por raza..."
            onChange={handleInputChange}
            />
            <button type="submit" onClick={handleSubmit}>Buscar</button>

        </div>
    )
}