import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return(
    <button className='uppercase flex justify-center w-full bg-dark-blue' onClick={() => loginWithRedirect()}>
      <div className='flex gap-5 items-center justify-center hover:text-ice-blue duration-200'>
        <p className='hidden lg:block text-lg uppercase font-thin'>Log In</p><FontAwesomeIcon icon="fas fa-sign-in-alt" />
      </div>
    </button>
  ) 
}

export default LoginButton