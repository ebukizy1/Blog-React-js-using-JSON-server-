import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

export const Create = () => {
  const [title, setTitle] = useState("");
  const [body,setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const navigate = useNavigate()
 

  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const blog = { title, body, author };
    setIsLoading(true);
    try {
      await axios.post("http://localhost:8000/blogPosts", blog);
      setIsLoading(false);
      navigate('/');
    } catch (error) {
      setIsLoading(false);
      console.error("Error:", error);
    }
  };
  
 
    
    
    

  return (
    <div className='create'>
        <h2>Create New Blog</h2>
        <form onSubmit={handleSubmit}>
            <label>Blog title:</label>
            <input type="text"required  onChange={(e)=>setTitle(e.target.value)}/>
            <label > Blog body:</label>
            <textarea required onChange={(e)=> setBody(e.target.value)}></textarea>
            <label> Blog author:</label>
            <input type="text"required onChange={(e)=>setAuthor(e.target.value)}/>
            {!isloading && <button>Add blog</button> }
            { isloading && <button disabled>Adding blog... </button> }
        </form>
    </div>
  )
  }