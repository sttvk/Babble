import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "../assets/styles/pages/AuthCard.css";

const LogIn = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="log-in">
      <div className="AuthCard-form-container">
        <span className="AuthCard-logo">Babble</span>
        <form onSubmit={handleSubmit} className="AuthCard-form">
          <input required type="email" placeholder="Email" />
          <input required type="password" placeholder="Password" />
          <button>Log in</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
