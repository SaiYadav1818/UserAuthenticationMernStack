import { useState } from "react";

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handle(e) {
    e.preventDefault();
    console.log(email, password);

    try {
      const api = await fetch('http://localhost:5005/api/auth/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const res = await api.json();
      console.log("Server Response:", res);

      alert(res.message || res.msg || "No message returned from server");
    } catch (error) {
      console.error("Error while calling API:", error);
      alert("Something went wrong!");
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form onSubmit={handle} className="p-4 border rounded shadow bg-white" style={{ minWidth: "300px" }}>
        <h3 className="mb-4 text-center">Register</h3>

        <div className="mb-3">
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="form-control"
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={!email || !password}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
