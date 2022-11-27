
import { Table } from 'reactstrap';
import React , { useEffect,useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import jwt from 'jsonwebtoken'
import Issue from './Issue';

    const History = () => {
  const navigate = useNavigate();
    async function getBooks(id){

        const resp  = await fetch(`http://localhost:8989/issue/getIss/${id}`)
        const data =  await resp.json()
        setBookData(data.issue)
        const d = data.issue;
        console.log(d[0]);
        // d.map(b=> console.log(b))
    }
    const [userd,setUserd] = useState('')
    const [bookData,setBookData] = useState([])
    useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
        const userdata = jwt.decode(token)
        if(!userdata){
            localStorage.removeItem('token')
            navigate('/login')
        }
        else{

            setUserd(userdata.user._id)
            // console.log(userdata.user._id);
        }
    }else{
        navigate('/login')
    }
    
},[])

useEffect(()=>{
    if(userd){
        // console.log(userd);
        getBooks(userd)
    }
},[userd])

        let i =0
        const bookEle = bookData.map(book=>{
            i+=1
             return <Issue data = {book} key ={i} sr ={i} />
            
            })
  return (
    <div className='records'>
    <div className="mt-6 text-center align-self-center full sma">
            <div className="row text-center justify-content-center">
            <div className="col-12">
                <h3 className='headingss'>Issue History</h3>
                <div className="contacts-i">
            {bookEle}   
            </div>
            </div>
            </div>
            </div>
    </div>
  );
}

export default History;