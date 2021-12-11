import React, { useState, useEffect } from "react";
import "../styles/App.css";
const App = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log("hi"); // return () => { //   cleanup // }
  }, [date]);

  setInterval(() => {
    setDate(new Date());
  }, 1000);

  return (
    <div id="main">
            <div className="date-time">{date.toLocaleString()}</div>   {" "}
    </div>
  );
};

export default App;
