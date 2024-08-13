import { RouterProvider, createBrowserRouter, useActionData } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../Utility/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../Utility/userSlice'

const Body = () => {
  const dispatch = useDispatch()
    const appRouter = createBrowserRouter([
        {
            path : "/",
            element : <Login />
        },
        {
            path: '/browse',
            element : <Browse />
        }
    ])
    useEffect(()=> {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email} = user
          dispatch(addUser({uid: uid, email:email,}))
        } else { 
          dispatch(removeUser())
        }
      });
      
    },[])
  return (
    <RouterProvider router={appRouter} />
  )
}

export default Body