import React , { useEffect }  from 'react';
import jwt from 'jsonwebtoken'
import { useNavigate } from 'react-router-dom';
import { Table } from 'reactstrap';

function Log() {
    const navigate = useNavigate();

    useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
        const user = jwt.decode(token)
        if(!user){
            localStorage.removeItem('token')
            navigate('/login')
        }
        else{
            console.log(user);
        }
    }else{
        navigate('/login')
    }
})
    

        return(
        <div className='records'>
            <div className="mt-6 text-center align-self-center full">
                <div className="row text-center justify-content-center">
                <div className="col-15">
                    <br /><br /><h3 className='headingss'>Issue Log</h3>
                    <Table className='tab' striped bordered hover responsive>
            <thead>
            <tr>
                <th className='th2'>S.No.</th>
                <th className='th2'>Name of Student</th>
                <th className='th2'>Roll No.</th>
                <th className='th2'>Name of Book</th>
                <th className='th2'>ISBN number</th>
                <th className='th2'>Issue Date</th>
                <th className='th2'> Return Deadline</th>
                <th className='th2'>Return status</th> 
                <th className='th2'>Fine (in Rs.)</th> 
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='td2'>1</td>
                    <td className='td2'>khushal</td>
                    <td className='td2'>74</td>
                    <td className='td2'>python</td>
                    <td className='td2'>435878</td>
                    <td className='td2'>20-11-2022</td>
                    <td className='td2'>27-11-2022</td>
                    <td className='td2'>Pending</td>
                    <td className='td2'>0 Rs</td>
                </tr>
                <tr>
                    <td className='td2'>2</td>
                    <td className='td2'>Bhavesh</td>
                    <td className='td2'>70</td>
                    <td className='td2'>python</td>
                    <td className='td2'>435878</td>
                    <td className='td2'>20-11-2022</td>
                    <td className='td2'>27-11-2022</td>
                    <td className='td2'>Pending</td>
                    <td className='td2'>0 Rs</td>
                </tr>
            </tbody>
            </Table>
                </div>
                </div>
                </div>
            </div>
        );
}

export default Log;