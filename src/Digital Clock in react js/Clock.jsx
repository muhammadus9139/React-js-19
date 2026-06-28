import { useEffect, useState } from "react";

const Clock = ({color}) => {
  const [time, settime] = useState("wait a bit");

  useEffect(() => {
    setInterval(() => {
      settime(new Date().toLocaleTimeString());
    }, 1000);
},[] )

  return (
    <div>
      <h1 style={{color:color}}>{time}</h1>
    </div>
  );
}

export default Clock;
