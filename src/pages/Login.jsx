import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";
import PublicContainer from "../components/PublicContainer";
import { auth } from "../firebase";

const Login = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  console.log("login error", error)

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignin = () => {
    if (!email || !password) {
      alert("Please fill email and password");
      return;
    }

    signInWithEmailAndPassword(email, password)
     
  };

  return (
    <PublicContainer>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div class="my-3">
                <label for="display-4">Email address</label>
                <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
              </div>
              <div class="my-3">
                <label for="floatingPassword display-4">Password</label>
                <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
              </div>
              <div className="my-3">
                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
              </div>
              <div className="text-center">
                <button class="my-2 mx-auto btn btn-dark" type="submit" disabled={loading} onClick={handleSignin}>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </PublicContainer>
  );
};

export default Login;
