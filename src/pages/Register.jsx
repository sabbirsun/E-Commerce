import React from "react";
import { Footer, Navbar } from "../components";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import PublicContainer from "../components/PublicContainer";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
const Register = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
console.log(
    "reg error", error
)
  const handleRegister = () => {
    if (!email || !password) {
      alert("Please fill email and password");
      return;
    }

    console.log("email is", email)
    console.log("password is", password)
    createUserWithEmailAndPassword(email, password)
  };

  return (
    <PublicContainer>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Register</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div class="form my-3">
                <label for="Email">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                />
              </div>
              <div class="form  my-3">
                <label for="Password">Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  class="form-control"
                  id="Password"
                  placeholder="Password"
                />
              </div>
              <div className="my-3">
                <p>
                  Already has an account?{" "}
                  <Link
                    to="/login"
                    className="text-decoration-underline text-info"
                  >
                    Login
                  </Link>{" "}
                </p>
              </div>
              <div className="text-center">
                <button
                  class="my-2 mx-auto btn btn-dark"
                  type="submit"
                  disabled={loading}
                  onClick={handleRegister}
                >
                  Register
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

export default Register;
