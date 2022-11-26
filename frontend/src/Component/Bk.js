import React from "react";

export default function Bk(props){
    console.log(props.data)
    const{image,name,author,price,quantity} =  props.data
    return(
        <>
            <div className="contact-card">
                <img src={image}/>
                <h3>{name}</h3>
                <div className="info-group">
                    
                    <p>{author}</p>
                </div>
                <div className="info-group">
                    
                    <p>Rs {price}</p>
                </div>
                <div className="info-group">
                    
                    <p>Copies {quantity}</p>
                </div>
            </div>
        </>
        // <tr>
        //         <td className='th2'>{props.sr}</td>
        //         <td className='th2'>{name}</td>
        //         <td className='th2'>{author}</td>
        //         <td className='th2'>{price}</td>
        //         <td className='th2'>{quantity}</td>
        // </tr>
       
    )
}