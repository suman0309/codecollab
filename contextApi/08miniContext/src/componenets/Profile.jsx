import React,{useContext} from 'react'
import UserContext from '../context/userContext'




function Profile() {
  const {user}=useContext(UserContext)

    if(!user)
        return <div>pleasse Login</div>

    return <div>Welcome{user.username}</div>
}

export default Profile