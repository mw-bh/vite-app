import { useState } from "react";
import { emailRegex } from "../utils";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <main>
      <form>
        <h1>Log In</h1>
        <section>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Username"
          ></input>
        </section>
        <section>
          <label htmlFor="username">Password</label>
          <input
            type="text"
            id="username"
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          ></input>
        </section>
        <button disabled={!password && !emailRegex.test(username)}>
          Submit
        </button>
      </form>
    </main>
  );
};

export default Login;
