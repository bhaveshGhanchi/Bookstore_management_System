import React , { useEffect, useState }  from 'react';
import jwt from 'jsonwebtoken'
import { useNavigate } from 'react-router-dom';
import { Table } from 'reactstrap';
import Bk from './Bk';
import { set } from 'mongoose';

const Books = () => {
    const navigate = useNavigate();
    const [bookData,setBookData] = useState([])
    const [userId,SetUserId] =  useState(null)
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
            else{
                console.log(user.user._id);
                SetUserId(user.user._id)
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
             return <Bk data = {book} key ={i} userid ={userId} />
            
            })
    
  return(
    <div className='records'>
        <div className="container sma">
        <div className="row">
            <div className="col-12">
            <h3 align="center" className='headingss'>List of All books</h3>
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