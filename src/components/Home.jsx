import { useState,useEffect, useLayoutEffect } from "react";
import Button from "./Button";

const Home = () => {
  const [counter, setCounter] = useState(0);
  const [greetingMessage, setGreetingMessage] = useState("Hello");
  
  const increaseCounter = () => {
    setCounter(counter + 1);
  }

  const decreaseCounter = () => {
    if (counter > 0) {
        setCounter(counter - 1);
    }
  }
  
/*  useEffect(() => {
    setTimeout(() => {
        setGreetingMessage("You're welcome")
    }, 3000);
  }, []);  */
  
  useEffect(() => {
    setGreetingMessage(`You're counter now is ${counter}`)
  }, [counter]);

  return (
    <div>
        <h1>Home Component</h1>
        <p>{greetingMessage} </p>
        <label htmlFor="counter">
            Counter: {counter}
        </label>
        <Button title="Increase counter" onClickHandler={increaseCounter}/>
        <Button title="Decrease counter" onClickHandler={decreaseCounter}/>
    </div>
  );
};

export default Home;

/*  
<button style={{ display: "block", margin: "auto", marginTop: "15px"}} onClick={increaseCounter}>Increase Counter</button>
<button style={{ display: "block", margin: "auto", marginTop: "15px"}} onClick={decreaseCounter}>Decrease Counter</button>
*/

