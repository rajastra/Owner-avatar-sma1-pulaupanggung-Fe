import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const RequireLogin = ({ children }) => {
   if (!Cookies.get('token')) {
      return <Navigate to="/login" />
   }

   return (
      <>{children}</>
   )
}

export default RequireLogin