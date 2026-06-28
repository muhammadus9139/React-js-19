import College from "./college";
function App() {


  let collegenames=["kips","kips2","kips3","kips4"];
  
    return(
      <div>
        <h1>Props in react</h1>
        <College names={collegenames}/>
      </div>
    );
}

export default App;
