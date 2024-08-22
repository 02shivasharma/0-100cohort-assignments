import { useState } from 'react'


function App() {
  const [todos, setTodos] = useState([{
    title: "Go To Gym",
    description : "GO to Gym 7 - 9",
    completed : false
  },
  {
    title: "done DSA",
    description : " do DSA 9 - 11",
    completed : false
  }])
  function onClickHandler(){
    setTodos([...todos,{
      title : "Do LeetCode",
      description : "do it for atlest Two Hours"
    }])
  }

  return (
    <div>
     <button onClick={onClickHandler}>Add todo To app</button>
     {
      todos.map((todo)=>{
        
        return(<Todo title={todo.title} description={todo.description}/>) 
        
      })
     }
        
    </div>
  )
}

function Todo(props){
  const {title, description} = props;
  
  return(
    <>
    <h1>{title}</h1>
    <h1>{description}</h1>
    </>
    )
  
}

export default App
