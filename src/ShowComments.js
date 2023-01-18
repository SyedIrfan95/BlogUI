import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const ShowComments=(props)=>{
    const {id}=props.match.params
    const [user,setUser]=useState({})
    const [body,setBody]=useState('')
    const [comments,setComments]=useState([])

    useEffect(()=>{
        (body && 
            axios.get(`https://jsonplaceholder.typicode.com/users/${body.userId}`)
            .then((response)=>{
                const result=response.data
                setUser(result)
            })
            .catch((err)=>{
                alert(err.message)
            }))
    },[body])

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response)=>{
                const result=response.data
                setBody(result)
            })
            .catch((err)=>{
                alert(err.message)
            })
    },[id])

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then((response)=>{
                const result=response.data
                setComments(result)
            })
            .catch((err)=>{
                alert(err.message)
            })
    },[id])

    return(
        <div>
            <h2>USER NAME : {user.name}</h2>
            <h2>Title : {body.title}</h2>
            <h2>Body : {body.body}</h2>
            <h2>Comments</h2>
            <ul>
                {comments.map((comment,i)=>{
                    return <li key={i}>{comment.name}</li>
                })}
            </ul>
            <p><Link to={`/users/${user.id}`}>More posts of author:{user.name}</Link></p>
        </div>
    )
}

export default ShowComments