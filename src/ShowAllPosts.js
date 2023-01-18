import React , {useState,useEffect} from "react"
import {Link} from 'react-router-dom'
import axios from 'axios'

const ShowAllPosts=(props)=>{
    const [posts,setPosts]=useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response)=>{
                const result=response.data
                setPosts(result)
            })
            .catch((err)=>{
                alert(err.message)
            })
    },[])

    return(
        <div>
            <h2>Total Posts - {posts.length}</h2>
            <ul>
                {posts.map((post,i)=>{
                    return <li key={i}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                })}
            </ul>
        </div>
    )
}

export default ShowAllPosts