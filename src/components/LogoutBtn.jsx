import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LogoutButton = () => {
  const { logout } = useAuth0()

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      <div className='flex gap-5 items-center justify-center hover:text-ice-blue duration-200'>
      <p className='hidden lg:block text-lg uppercase font-thin'>Log Out</p><FontAwesomeIcon icon="fas fa-sign-out-alt" />
      </div>
    </button>
  );
};

export default LogoutButton;