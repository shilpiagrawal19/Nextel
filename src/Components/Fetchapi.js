import React,{useEffect} from 'react'

function Fetchapi() {
    
    useEffect(()=>{
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url).then(resp => resp.json())
        .then(resp => console.log(resp))
    },[])
    return (
        <div>
           
        </div>
    )
}

export default Fetchapi
