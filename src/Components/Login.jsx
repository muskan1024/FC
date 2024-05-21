import { Cancel } from '@mui/icons-material'
import React, { useState } from 'react'

const Login = () => {
    const [login,setLogin]=useState("Login")
  return (
    <div className='login-popup'>
        <form className=''>
        <div>
            <h2>{login}</h2>
            <Cancel />
        </div>
        <div>
            {login ==="Login"?(
                    <></>
                ):(
                    <input type="text" placeholder='Your First Name' />
                )
            }
        </div>
        </form>
      
    </div>
  )
}

export default Login
