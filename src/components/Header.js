import React from "react";
import logo from "../logo.svg";
import Button from "@material-ui/core/Button";

export default function Header() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Button variant="contained" color="primary">
          {" "}
          <a
            className="App-link"
            href="https://www.linkedin.com/in/arthur-etmekdjian-218685162/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click for my linkedin page{" "}
          </a>{" "}
        </Button>

        <Button variant="contained" color="primary">
          1 click = 1 cyber hug
        </Button>
      </header>
    </div>
  );
}
