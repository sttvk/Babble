import React, { useContext } from "react";
import { auth } from "../firebase";
import "../assets/styles/components/NavBar.css";
import { signOut } from "firebase/auth";
import { AuthContext } from "../contexts/AuthContext";

const NavBar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="nav-bar">
      <span className="nav-bar-logo">Babble</span>
      <div className="nav-bar-user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Log out</button>
      </div>
    </div>
  );
};

export default NavBar;
