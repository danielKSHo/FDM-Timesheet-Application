import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../app-state/userSlice";
import { BASE_URL } from "../app-state/api-components/api-url";
import Button from "../components/Button";
import { RootState } from "../app-state/store";
import { Role } from "../app-state/api-components/roleEnum";
import "./Login.css";

export default function LoginForm() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userRole = useSelector((state: RootState) => state.user.role);
  useEffect(() => {
    if (userRole === Role.ADMIN) {
      navigate("/admin");
    } else if (userRole === Role.MANAGER) {
      navigate("/manager/consultant");
    } else if (userRole === Role.CONSULTANT) {
      navigate("/consultant");
    } else {
      // error message
      if (userRole != Role.INIT) {
        setErrorMessage(
          "Invalid email address or password entered, please try again!"
        );
      }
    }
  }, [userRole]);
  const dispatch = useDispatch();

  const loginHandler = async () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!emailRegex.test(email)) {
      setErrorMessage(
        "You have entered an invalid email, please enter a correct email including @, etc."
      );
    }

    try {
      const result = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });
      const data = await result.json();
      dispatch(login({ username: email, token: data.token }));
    } catch (error) {
      setErrorMessage("Login Failed. Please try again later!");
    }
  };

  return (
    <div className="login-container">
      <div className="purple-box">
        {/* Colour Dodge Effects */}
        <div className="colour-dodge" />
        <div className="colour-dodge2" />

        {/* Welcome Section */}
        <section className="s1">
          <div className="fdm-logo">
            <svg viewBox="0 0 1280 404" xmlns="http://www.w3.org/2000/svg">
              <path d="M621.112 125.876H309.86V404h311.252c43.162 0 78.189-35.063 78.189-78.269V204.146c0-43.206-34.991-78.27-78.189-78.27zm-37.299 214.306c0 19.952-16.158 36.127-36.089 36.127H425.311V153.568h122.413c19.931 0 36.089 16.174 36.089 36.127v150.487zM36.09 125.876h225.699v27.692H121.46a5.992 5.992 0 00-6.009 6.015v86.668h146.338v27.691H115.488v130.021H0v-241.96c0-19.952 16.158-36.127 36.09-36.127zM1160.3 52.668C1198.37 38.474 1238.63 21.053 1280 0v404h-115.45V102.88l-90.06 166.184v134.899H959.002V155.842l-90.06 166.184V404H753.454V161.967c0-19.549 15.535-35.504 35.064-36.091 27.04-.807 53.86-3.044 80.424-5.685V263.93l84.087-155.145c39.498-6.786 80.351-16.065 121.461-27.838v130.057l85.85-158.335h-.04z" />
            </svg>
          </div>
          <div className="welcome-heading">Welcome Back!</div>
        </section>

        {/* Login Section */}
        <section className="s2">
          <div className="login-heading">Login</div>

          {/* Email */}
          <label className="login-label">Email Address</label>
          <input
            className="login-input"
            type="email"
            id="email"
            placeholder="name@example.com"
            pattern=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password */}
          <div className="login-label">Password</div>
          <input
            className="login-input"
            type="password"
            id="password"
            aria-describedby="passwordHelpBlock"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="login-message" id="passwordHelpBlock">
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </div>
          <div className="login-error">{errorMessage}</div>
          {/* Button */}
          <Button
            colour="secondary"
            className="login-button"
            onClick={loginHandler}
          >
            Login
          </Button>
        </section>
      </div>
    </div>
  );
}
