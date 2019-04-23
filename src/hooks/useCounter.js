import { useState, useEffect } from "react";

export default (initialValue) => {
  const [count, setCount] = useState(initialValue)
  
  const counter = (count) => {    
    setCount(count);
    localStorage.setItem("count", count);
  }
  
  useEffect(() => {
    const localCount = localStorage.getItem("count");
		if (localCount) {
			setCount(Number(localCount));
		}
	}, []);

  return {
    count,
    counter
  };
}