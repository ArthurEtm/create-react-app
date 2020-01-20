import React from "react";
import "./App.css";
import Header from "./components/Header";
import Photos from "./components/Photos";
import Daily from "./components/Daily";

function App() {
  return (
    <div className="App">
      <Header />
      <Daily text="Say thank you to a senior programmer" />

      <Photos
        url="https://picsum.photos/id/237/200/300"
        text="whose dog is this"
      />

      <Photos
        url="https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png"
        text="This is my favorite google image for react"
      />
    </div>
  );
}

export default App;

//build alert
