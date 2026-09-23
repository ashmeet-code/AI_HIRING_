import '../App.css';
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login button clicked!");
  };
  return (
    <div className="login-page">

      <div className="login-box">

        <h1>Welcome Back</h1>

        <p>Login to your HireSense account</p>

        <input
          type="email"
          placeholder="Email Address"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>

        <span className="login-note">
          Smart Hiring. Better Careers.
        </span>

      </div>

    </div>
  );
}

export default Login;