import React , { useEffect, useState }  from 'react';
import jwt from 'jsonwebtoken'
import { useNavigate } from 'react-router-dom';
import { Table } from 'reactstrap';
import Bk from './Bk';

const Books = () => {
    const navigate = useNavigate();
    const [bookData,setBookData] = useState([])

    async function getBooks(){

        const resp  = await fetch("http://localhost:8989/book/allBooks")
        const data =  await resp.json()
        setBookData(data.books)
        // const d = data.books;
        // d.map(b=> console.log(b))
    }
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            const user = jwt.decode(token)
            if(!user){
                localStorage.removeItem('token')
                navigate('/login')
            }
            
        }else{
            navigate('/login')
        }
        
        getBooks()
    
        },[])
        // console.log(bookData);
        let i =0
        const bookEle = bookData.map(book=>{
            i+=1
             return <Bk data = {book} key ={i} sr ={i} />
            
            })
    
  return(
    <div className='records'>
        <div className="container sma">
        <div className="row">
            <div className="col-12">
            <h3 align="center" className='headingss'>List of All books</h3>
            {/* <Table className='tab' striped bordered hover responsive>           
                <thead>
                <tr>
                    <th className='th2'>S.No.</th>
                    <th className='th2'>Name of Book</th>
                    <th className='th2'>Authors</th>
                    <th className='th2'>Price</th>
                    <th className='th2'>Copies available</th>
                </tr>
                </thead>
                <tbody>
                    {bookEle}
                </tbody>
            
        </Table> */}
            <div className="contacts">
            {bookEle}   
            </div>
            </div>
        </div>
    </div>
    </div>
    );
}

export default Books;