import React from 'react'
import { BlogList } from './BlogList'
import { useFetch } from './useFetch'

export const Home = () => {
    const {data:blogs, isPending, error} = useFetch("http://localhost:8000/blogPosts"); 



  return (
    <div className="home">
        {error &&  <div>  {error}</div>}
        {isPending  && <div> loading...</div>}
     {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
}
