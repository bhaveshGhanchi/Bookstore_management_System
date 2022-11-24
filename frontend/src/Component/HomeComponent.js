import React from 'react';

function Home() {
    return(
        <>
          <div className="container mt-4 home text-center align-self-center">
        <br/><br/>
            <div>
            <h1 className="Headline"align="center" style={{fontSize:"3rem", color:'white'}}> Welcome to Our Library</h1>
            </div>
            <div className='space'>          
        
            </div>
            <div className="row justify-content-center align-self-center">
            <br/>
            <table className='tabla'>
                <tr> <th colspan="2">Library Timings</th> </tr>
                <tr> <td>Opening Time </td> 
                <td> 9.00 A.M.</td></tr>
                <tr> <td>Closing Time </td> 
                <td> 6.00 P.M.</td></tr>
            </table><br/>
                </div>
                <br/><br/><br/>
            </div>
        </>
        );
}

export default Home;