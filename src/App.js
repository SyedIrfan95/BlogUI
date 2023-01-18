import React from 'react'
import {Link,Route} from 'react-router-dom'
import UsersList from './UsersList'
import ShowPosts from './ShowPosts'
import ShowAllPosts from './ShowAllPosts'
import ShowComments from './ShowComments'

const App=(props)=>{

  return(
    <div>
      <h2><Link to="/">Home</Link> | <Link to="/users">Users</Link> | <Link to="/posts">Posts</Link></h2>
      <Route path="/" exact={true} />
      <Route path="/users" component={UsersList} exact={true} />
      <Route path="/users/:id" component={ShowPosts} />
      <Route path="/posts" component={ShowAllPosts} exact={true} />
      <Route path="/posts/:id" component={ShowComments} />
    </div>
  )
}

export default App