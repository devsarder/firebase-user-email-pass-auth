const Login = () => {
  return (
    <div>
      <form className="flex flex-col gap-1 max-w-lg">
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
    </div>
  );
};

export default Login;
