import "./login.css";

export function LogIn() {
  return (
    <div className="login-page">
      <div className="login-box">
        <form className="login-form">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}
