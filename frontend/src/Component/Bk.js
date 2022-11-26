import React from "react";

export default function Bk(props){
    
    const{name,author,price,quantity} =  props.data
    return(
        
        <tr>
                <td className='th2'>{props.sr}</td>
                <td className='th2'>{name}</td>
                <td className='th2'>{author}</td>
                <td className='th2'>{price}</td>
                <td className='th2'>{quantity}</td>
        </tr>
       
    )
}