import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firbase.init";
import { useState } from "react";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegistration = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      setRegisterError("password too short should be 6 characters or longer");
      return;
    }
    setRegisterError("");
    setSuccess("");
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        const user = response.user;
        console.log(user);
        setSuccess("you have registered successfully");
      })
      .catch((err) => {
        const error = err.message;
        setRegisterError(error);
        console.error(err);
      });
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
          type="password"
          name="password"
          id=""
          placeholder="Password"
          required
        />
        <br />
        <input className="btn btn-primary" type="submit" value="submit" />
      </form>
      <div>
        {registerError && <p className="text-red-600">{registerError}</p>}
      </div>
      <div>{success && <p className="text-green-600">{success}</p>}</div>
    </div>
  );
};

export default Register;
