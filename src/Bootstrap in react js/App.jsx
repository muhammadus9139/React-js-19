// Bootstrap in react js
import {Button} from "react-bootstrap"
import {Alert} from "react-bootstrap"
function App() {

return(
  <div>
  <h1>hello</h1>
  <button variant="danger" onClick={()=>alert("bootstrap here")}>Bootstrap button</button>
  <Alert variant="warning">hello,bt installed</Alert>
  <button onClick={()=>alert("Simple here")}>Simple button</button>
  </div>
);

  

}

export default App;
