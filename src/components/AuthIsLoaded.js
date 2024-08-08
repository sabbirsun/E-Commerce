import { useSelector } from "react-redux";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../firebase";

export default function AuthIsLoaded({ children }) {
  const [, loading,] = useAuthState(auth);

  if (loading) return <div>splash screen...</div>;
  return children
}