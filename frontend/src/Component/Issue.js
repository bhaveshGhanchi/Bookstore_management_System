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
        
        </>
    )
    }