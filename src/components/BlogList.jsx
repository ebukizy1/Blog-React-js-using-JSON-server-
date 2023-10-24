import React from 'react'
import { Link } from 'react-router-dom'

export const BlogList = ({blogs   , title}) => {


  return (
    <div className='blog_list'>
        <h2>{title}</h2>

         {blogs.map((blog)=>(
        <div className="blog_preview" key={blog.id}>   
            <Link to={`/blog/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>written by {blog.author}</p>
            </Link>
        </div>
       ))}
    </div>
  )
}
