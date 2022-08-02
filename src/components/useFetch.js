//we make a "custom hook" -> we globalize a function so we can use it from other filenames
//to make a custom hook the file name must start with "use"

import {useState, useEffect} from 'react';

const useFetch = (url , number) => {
        const [json_info , setJsonInfo] = useState(null);
        const [error , setError] = useState(null);

        useEffect(() => {
            fetch(url)
              .then(res => {
                if(!res.ok){
                  throw Error('could not fetch data from that resource');  //server responded(its ok)but we are potentially accessing a wrong port of the server
                }
                console.log(res)
                return res.json();
              })
              .then(data => {
                console.log(data);
                setJsonInfo(data);
                setError(null);
              })
              .catch(err => {                  //catches errors from connection to server (fe "failed to fetch error")
                console.log(err.message);
                setError(err.message);
              });
          }, [url , number]);

          return {json_info , error}
}
 
export default useFetch;