import React, { useState, useEffect } from "react";
import openSocket from "socket.io-client";
import config from './config';
import axios from 'axios';
const ENDPOINT = require("./config").default.REACT_APP_NODE_API_URL;

const App = () => {
  const [response, setResponse] = useState("");

  useEffect(() => {
    console.log(`${config.REACT_APP_NODE_API_URL}/api/chat/test`);
    // const socket = io.connect(`${config.REACT_APP_NODE_API_URL}/api/chat/test`)
    const socket = openSocket(ENDPOINT);
    socket.on("tests", (data) => {
      console.log("1. " + data)
      setResponse(data);
    });
    
    axios({
      method: "get",
      url: `${config.REACT_APP_NODE_API_URL}/api/chat/test`,
    })
      .then((res) => {
        console.log("1. " + res);
      })
      .catch((err) => {
        console.log(err);
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
