import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext)
    
    if(!user){
        return <div>Please Login</div>
    }
    return <div>Welcome {user.Username}</div>
}

export default Profile