// Way 1 of styled component
import styled from "styled-components";

function App() {

  const Heading = styled.h3`
    color: red;
    border:1px solid green;
    margin:20px;
    border-radius:5px;
    paddin:10px;
  `;

  return (
    <>
      <h1>Style with styled-components</h1>

      <Heading>Hello Heading</Heading>
      <Heading>Hello Heading</Heading>
      <Heading>Hello Heading</Heading>
      <Heading>Hello Heading</Heading>
      <Heading>Hello Heading</Heading>
    </>
  );
}

export default App;
