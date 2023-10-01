import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firbase.init";
import { Link } from "react-router-dom";

const Login = () => {
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
  return (
    <div>
      <form onSubmit={handleSignIn} className="flex flex-col gap-1 max-w-lg">
        <h3 className="text-2xl">Please Login</h3>
        <input
          className="bg-gray-200 px-2 py-1 rounded-md"
          type="email"
          name="email"
          placeholder="Email Address"
          id=""
        />
        <br />
        <input
          className="bg-gray-200 px-2 py-1 rounded-md"
          type="password"
          name="password"
          id=""
          placeholder="Password"
        />
        <br />
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
