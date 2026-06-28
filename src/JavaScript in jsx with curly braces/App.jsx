import Header from "./Header";
import ToDo from "./ToDo";

function App() {
  const name="Usama";
  const object={
    name:"Usama",
    age:20,
    city:"Karachi"
  };

  const arr=['Usama','Ali','Ahmed'];

  let path="data:image/jpeg;base64,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";

  let x=10;
  let y=20;

  function fruit(){
    return "Mango";
  }

  function sum(a,b){
    return a+b;
  }

  function operation(a,b,op){
    if(op=="+"){
      return a+b;
    }
    else if(op=="-"){
      return a-b;
    }
    else{
      return a*b;
    }
  }

  return (
    <div>
      <h1>JSX with curly braces</h1>
      <h1>Hello {name?name:"User not found"} {x+y}</h1>
       {fruit()}
       <h1>Sum is {sum(10,100)}</h1>
       <h1>Operation is {operation(10,5,"+")}</h1>
       <h1>object </h1>
       <p>{object.name}</p>
       <p>{object.age}</p>
       <p>{object.city}</p>
        <h1>{arr[0]}</h1>
        <img src={path} alt="Image"  />
        <br/>
        <input type="text" placeholder="Enter your name" />
        <button onClick={()=>{alert("Value entered!");
        }}>submit</button>
   </div>
  );
}

export default App;
