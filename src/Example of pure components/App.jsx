function App() {

  return (
    <>
    <h1>Keep components pure</h1>
    <h3>Example of pure components</h3>
    <Cup guest={1}/>
    <Cup guest={3}/>
    <Cup guest={5}/>
    </>
  );
}

function Cup({guest}){
 
  return(
    <h4>We have {guest} guest and we have to make {guest} cup of tea</h4>
  );
}

export default App;
