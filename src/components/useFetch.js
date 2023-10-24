import  { useEffect, useState } from 'react'
import axios from 'axios'


export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] =useState(true);
    const [error, setError] = useState(null);

    const fetchBlogPost =async()=>{
        try{         
             const apiResponse = await axios.get(url);
             if(apiResponse.status === 200){
                 setData(apiResponse.data);
                 setIsPending(false);
                 setError(null);
             }
         
        }catch(err){
            setIsPending(false)
            setError(err.message);
        };
   
   };

   useEffect(()=>{

    setTimeout(()=>{
        fetchBlogPost();
    },1000);
      
   }, [url]);



  return {data, isPending, error}
};
