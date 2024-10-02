import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {
    const {user} =useContext(UserContext);


        if (!user) return <div> "plase login"</div>
            
        
      return <div><h1>hello {user.username}your password is {user.password}</h1>

    </div>
  
}

export default Profile
