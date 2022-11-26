import React from "react";

export default function Issue(props){
    const{sr} =  props
    const{name,image} = props.data.book
    const{issueDate,returned,dueDate} = props.data
    const issDate = issueDate.split('T')[0]
    const dDate = dueDate.split('T')[0]
    
    return(
        <>
            <div className="contact-card-inverse">
                <img src={image}/>
                <div className="contact-data">
                    <h2>{name}</h2>
                    <h3>Issue Date: {issDate}</h3>
                    <h3>Due Date: {dDate}</h3>
                </div>
                <h3>{returned?<p>Returned</p>:<p>Not returned</p>}</h3>
                
            </div>
        {/* <tr>
            <th className='th2'>{sr}</th>
            <th className='th2'>{name}</th>
            <th className='th2'>{issDate}</th>
            <th className='th2'>{dDate}</th>
            <th className='th2'>{returned?<p>Returned</p>:<p>Not returned</p>}</th> 
        </tr> */}
        </>
    )
    }