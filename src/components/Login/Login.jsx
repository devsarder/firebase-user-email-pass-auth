import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../firebase/firbase.init";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Login = () => {
  const emailRef = useRef(null);
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    e.target.reset();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
      })
      .then((error) => console.log(error));
  };
  const handleForgetPass = (e) => {
    // e.stopPropagation();
    e.preventDefault();
    const email = emailRef.current.value;
    if (!email) {
      alert("Please enter a valid email");
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      alert("correct your email");
    }
    sendPasswordResetEmail(auth, email).then(() => {
      alert("please check your email");
    });
    console.log(emailRef);
    console.log(emailRef.current.value);
  };
  return (
    <div>
      <form onSubmit={handleSignIn} className="flex flex-col gap-1 max-w-lg">
        <h3 className="text-2xl">Please Login</h3>
        <input
          className="bg-gray-200 px-2 py-1 rounded-md"
          type="email"
          name="email"
          placeholder="Email Address"
          ref={emailRef}
          id="email"
        />
        <br />
        <input
          className="bg-gray-200 px-2 py-1 rounded-md"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <br />
        <p>
          <button onClick={handleForgetPass}>Forgot Password</button>
        </p>
        <input className="btn btn-success" type="submit" value="Log in" />
      </form>
      <div>
        <p>
          New to this website? Please <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
