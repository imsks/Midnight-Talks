import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = require("./config").default.REACT_APP_NODE_API_URL;

const App = () => {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", (data) => {
      setResponse(data);
    });
    
    // CLEAN UP THE EFFECT
    return () => socket.disconnect();
    //
  }, []);

  return (
    <div className="App">
      <p>
        It's <time dateTime={response}>{response}</time>
      </p>
    </div>
  );
};

export default App;
