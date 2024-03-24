import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
  const { currentSupplier } = useSelector((state) => state.supplier);
  return currentSupplier ? <Outlet /> : <Navigate to='/supplier-signin' />;
}