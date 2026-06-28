import Header from "./Header";
function App() {
  return (
    <div>
   <h1>First component</h1>
   <Fruit/>
   <Color/>
   </div>
  );
}

function Fruit(){
  return (
    <h1>fruit</h1>
  );
}

function Color(){
  return (
    <h1>color</h1>
  );
}

export default App;
