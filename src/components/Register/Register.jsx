import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import auth from "../../firebase/firbase.init";
import { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegistration = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    e.target.reset();
    if (password.length < 6) {
      setRegisterError("password too short should be 6 characters or longer");
      return;
    } else if (!terms) {
      setRegisterError("Please accept our terms and conditions");
      return;
    }
    setRegisterError("");
    setSuccess("");
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        const user = response.user;
        sendEmailVerification(user).then(() => {});

        console.log(user);
        setSuccess("you have registered successfully");
      })
      .catch((err) => {
        const error = err.message;
        setRegisterError(error);
        console.error(err);
      });
    setRegisterError("");
    setSuccess("");
  };
  return (
    <div>
      <form
        onSubmit={handleRegistration}
        className="flex flex-col gap-1 max-w-lg"
        action=""
      >
        <h3 className="text-2xl">Please Register</h3>
        <input
          className="bg-gray-200 px-2 py-1 rounded-md"
          type="email"
          name="email"
          id=""
          placeholder="Email Address"
          required
        />
        <br />
        <input
          className="bg-gray-200 px-2 py-1 rounded-md"
          type={showPassword ? "text" : "password"}
          name="password"
          id=""
          placeholder="Password"
          required
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="btn btn-primary rounded-md p-2"
        >
          {showPassword ? (
            <FaRegEye className="text-xl"></FaRegEye>
          ) : (
            <FaRegEyeSlash className="text-xl"></FaRegEyeSlash>
          )}
        </span>
        <br />
        <div>
          <input type="checkbox" name="terms" id="terms" />
          <label htmlFor="terms">
            Please Accept our
            <a className="underline" href="">
              Terms and conditions
            </a>
          </label>
        </div>
        <input className="btn btn-primary" type="submit" value="submit" />
      </form>
      <div>
        {registerError && <p className="text-red-600">{registerError}</p>}
      </div>
      <div>{success && <p className="text-green-600">{success}</p>}</div>
      <div>
        <p>
          Already Have An Account? Please <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
