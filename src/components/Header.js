import React from "react";
import logo from "../logo.svg";

export default function Header() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My name is Arthur</p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/arthur-etmekdjian-218685162/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click for my linkedin page{" "}
        </a>
      </header>
    </div>
  );
}
