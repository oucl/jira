import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { useAuth } from "context/auth-context";
import { LoginPage } from "./pages/login/index";
import { Home } from "pages/home";

function App() {
  const { user } = useAuth();
  return <div className="App">{user ? <Home /> : <LoginPage />}</div>;
}

export default App;
