import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';
import { selectCurrentUser } from '../feature/auth';

const useAuth = () => {
  const user = useSelector(selectCurrentUser);
  console.log(user);
  if (user) {
    return true;
  } else {
    return false;
  }
};

const AuthGuard = () => {
  return useAuth() ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthGuard;
