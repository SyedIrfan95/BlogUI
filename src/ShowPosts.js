import React , {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const ShowPosts=(props)=>{
    const {id}=props.match.params
    const [user,setUser]=useState({})
    const [posts,setPosts]=useState([])

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response)=>{
                const result=response.data
                setUser(result)
            })
            .catch((err)=>{
                alert(err.message)
            })
    },[id])

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then((response)=>{
                const result=response.data
                setPosts(result)
            })
            .catch((err)=>{
                alert(err.message)
            })
    },[id])

    return(
        <div>
            <h2>USER NAME : {user.name}</h2>
            <h2>POSTS WRITTEN BY USER</h2>
            <ul>
                {posts.map((post,i)=>{
                    return <li key={i}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                })}
            </ul>
        </div>
    )
}

export default ShowPosts