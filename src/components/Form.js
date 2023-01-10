import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import {Input} from 'reactstrap'
function Form(){
    return(
        <form className='form-style'>
           <Input placeholder='Search For Products, Brands & Categories'/>
           <AiOutlineSearch size={`1.25rem`} className="form-icons-style"/>
        </form>
    )
}

export default Form;