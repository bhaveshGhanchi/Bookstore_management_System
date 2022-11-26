import React from "react";

export default function Issue(props){
    const{sr} =  props
    const{name} = props.data.book
    const{issueDate,returned,returnDate} = props.data
    const issDate = issueDate.split('T')[0]
    // let retDate= ''
    // console.log(returnDate);
    // if(returnDate!== undefined){

    //     let retDate = returnDate.split('T')[0]
    // }
    console.log(props.data)
    return(
        
        <tr>
            <th className='th2'>{sr}</th>
            <th className='th2'>{name}</th>
            <th className='th2'>{issDate}</th>
            <th className='th2'>{returnDate}</th>
            <th className='th2'>{returned?<p>Returned</p>:<p>Not returned</p>}</th> 
           </tr>
    )
}