import React from 'react'
import { useDispatch } from 'react-redux'

export default function Profile() {
  const dispatch = useDispatch()

  return (
    <div>
     <button onClick={() => dispatch({type :"logout"})} >Logout</button> 
      
    </div>
  )
}
