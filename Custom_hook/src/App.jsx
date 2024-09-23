import { useEffect, useState } from 'react'

const useInterval = (callback, delay) => {
  useEffect(() => {
    const intervalId = setInterval(callback, delay);

    return () => {clearInterval(intervalId)
    console.log("component is Unmounted")};
  }, [callback, delay]);
};

function App() {
 const [count, setCount] = useState('');
 useInterval(()=>{
  setCount("cpunt is happenign")
 }, 5000)

  return (
  
    <>
    count vlaue is {count}
    </>
  )
}

export default App