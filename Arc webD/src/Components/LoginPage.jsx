import './LoginPage.css'
function LoginPage() {
    return <div>
        <form>
          <h3>Login</h3>
          <label htmlFor ="username">Username</label>
          <input type="text" placeholder="Email or Phone" id="username" />

          <label htmlFor ="username">Password</label>
          <input type="password" placeholder="Password" id="password" />

          <button>Log In</button>
          <div className="social">
            <div className="go"><i className = "fab fa-google"></i>     Google</div>
          </div>
        </form>
    </div>
}

export default LoginPage