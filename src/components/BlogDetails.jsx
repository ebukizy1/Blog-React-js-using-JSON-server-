import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetch } from './useFetch';
import axios from 'axios';

export const BlogDetails = () => {
    const { id} = useParams();
    const {data:blog , isPending, error} = useFetch('http://localhost:8000/blogPosts/'+id);
    const navigate = useNavigate();

    const handleClick= async()=>{
      try{
        await axios.delete('http://localhost:8000/blogPosts/' + blog.id);
          navigate('/');
      }catch(err){
        console.error(err)
      }
    }

   
  return (
    <div className='blog-details'>
       { isPending && <div> loading...</div>}
       { error && <div> {error}</div> }
       { blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>written  by {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleClick}>Delete</button>
            </article>

       )}
    </div>
  )
}
