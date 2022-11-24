import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Error404 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 3000)
  }, [])
  return (
    <div>No Page Found, Redirecting to home page</div>
  )
}

export default Error404