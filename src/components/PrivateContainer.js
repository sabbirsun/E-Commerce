import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import { auth } from '../firebase';

export default function PrivateContainer({ children }) {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading..</div>
  }

  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
}
