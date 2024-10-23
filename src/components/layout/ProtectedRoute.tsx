import { UserRoleDto } from '@apis/generated/data-contracts';
import useAuthStore from '@store/authStore';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { getUser } = useAuthStore();
  const user = getUser();

  if (user.role !== UserRoleDto.RoleAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
