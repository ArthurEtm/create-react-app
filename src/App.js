import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Photos from "./components/Photos";

function App() {
  return (
    <div className="App">
      <Header />
      <Photos url="https://picsum.photos/id/237/200/300" text="dog photo" />
      <Photos
        url="https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png"
        text="jkhlsadfbjk"
      />
    </div>
  );
}

export default App;
